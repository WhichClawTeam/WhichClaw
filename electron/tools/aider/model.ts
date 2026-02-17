// Aider 模型配置模块
// 处理 ~/.aider.conf.yml 的读写
// YAML 格式，支持 OpenAI 和 Anthropic 双协议

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// 工具函数：展开路径
function expandPath(p: string): string {
    let result = p;
    if (process.platform === 'win32') {
        result = result.replace(/%([^%]+)%/g, (_, name) => process.env[name] || '');
    }
    if (result.startsWith('~/') || result === '~') {
        result = path.join(os.homedir(), result.slice(1));
    }
    return path.normalize(result);
}

const CONFIG_PATH = expandPath('~/.aider.conf.yml');

// YAML 简易读取：提取键值对（仅处理简单 key: value 格式）
function readYamlValue(content: string, key: string): string {
    const lines = content.split('\n');
    for (const line of lines) {
        const trimmed = line.trim();
        // 跳过注释行
        if (trimmed.startsWith('#')) continue;
        // 匹配 key: value 或 key: "value"
        const match = trimmed.match(new RegExp(`^${key}:\\s*(.+)$`));
        if (match) {
            let value = match[1].trim();
            // 去掉引号
            if ((value.startsWith('"') && value.endsWith('"')) ||
                (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            return value;
        }
    }
    return '';
}

// YAML 简易写入：替换或添加键值对
function writeYamlValue(content: string, key: string, value: string): string {
    const lines = content.split('\n');
    const pattern = new RegExp(`^${key}:`);
    const commentPattern = new RegExp(`^#\\s*${key}:`);
    let found = false;

    for (let i = 0; i < lines.length; i++) {
        const trimmed = lines[i].trim();
        // 替换已有的（非注释）行
        if (pattern.test(trimmed)) {
            lines[i] = `${key}: ${value}`;
            found = true;
            break;
        }
    }

    if (!found) {
        // 查找被注释掉的同名键，在其后插入
        for (let i = 0; i < lines.length; i++) {
            if (commentPattern.test(lines[i].trim())) {
                lines.splice(i + 1, 0, `${key}: ${value}`);
                found = true;
                break;
            }
        }
    }

    if (!found) {
        // 都没有，追加到文件末尾
        lines.push(`${key}: ${value}`);
    }

    return lines.join('\n');
}

// 删除 YAML 中的某个键
function removeYamlValue(content: string, key: string): string {
    const lines = content.split('\n');
    const pattern = new RegExp(`^${key}:`);
    return lines.filter(line => !pattern.test(line.trim())).join('\n');
}

// --- 导出函数 ---

/**
 * 读取当前模型信息
 */
export async function getCurrentModelInfo(readConfig: () => Promise<any>): Promise<any> {
    try {
        if (!fs.existsSync(CONFIG_PATH)) return null;
        const content = fs.readFileSync(CONFIG_PATH, 'utf-8');

        const model = readYamlValue(content, 'model');
        if (!model) return null;

        // 读取 API Key（两种协议都检查）
        const openaiKey = readYamlValue(content, 'openai-api-key');
        const anthropicKey = readYamlValue(content, 'anthropic-api-key');
        const apiKey = openaiKey || anthropicKey || '';

        // 读取 baseUrl
        const baseUrl = readYamlValue(content, 'openai-api-base');

        return {
            id: 'current',
            name: model,
            model: model,
            baseUrl: baseUrl,
            apiKey: apiKey,
        };
    } catch {
        return null;
    }
}

/**
 * 应用模型配置
 */
export async function applyConfig(
    modelInfo: any,
    readConfig: () => Promise<any>,
    writeConfig: (config: any) => Promise<boolean>,
    getConfigFile: () => string
): Promise<{ success: boolean; message: string }> {
    try {
        let content = '';
        if (fs.existsSync(CONFIG_PATH)) {
            content = fs.readFileSync(CONFIG_PATH, 'utf-8');
        }

        // 写入模型名
        const model = modelInfo.model || modelInfo.name || '';
        if (model) {
            content = writeYamlValue(content, 'model', model);
        }

        // 根据协议写入对应的 API Key 和 URL
        const protocol = modelInfo.protocol || 'openai';

        if (protocol === 'anthropic') {
            // Anthropic 协议
            if (modelInfo.apiKey) {
                content = writeYamlValue(content, 'anthropic-api-key', modelInfo.apiKey);
            }
            // 清除 OpenAI 的 key 和 base（避免冲突）
            content = removeYamlValue(content, 'openai-api-key');
            content = removeYamlValue(content, 'openai-api-base');
        } else {
            // OpenAI 协议（默认）
            if (modelInfo.apiKey) {
                content = writeYamlValue(content, 'openai-api-key', modelInfo.apiKey);
            }
            if (modelInfo.baseUrl) {
                content = writeYamlValue(content, 'openai-api-base', modelInfo.baseUrl);
            }
            // 清除 Anthropic 的 key（避免冲突）
            content = removeYamlValue(content, 'anthropic-api-key');
        }

        // 写入文件
        fs.writeFileSync(CONFIG_PATH, content, 'utf-8');

        return {
            success: true,
            message: `Model "${model}" applied to Aider (${protocol}) successfully.`
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message || 'Unknown error'
        };
    }
}
