// ZeroClaw 模型配置模块
// 处理 ~/.zeroclaw/config.toml 的读写
// TOML 格式，使用简单文本替换（不引入 TOML 解析库）

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

const CONFIG_PATH = expandPath('~/.zeroclaw/config.toml');

// TOML 简易读取：提取顶层键值对
function readTomlValue(content: string, key: string): string {
    // 匹配顶层 key = "value" 或 key = 'value'（不在 [section] 块内）
    const lines = content.split('\n');
    let inSection = false;
    for (const line of lines) {
        const trimmed = line.trim();
        // 检查是否进入了 [section]
        if (/^\[.+\]$/.test(trimmed)) {
            inSection = true;
            continue;
        }
        // 空行重置 section（TOML 兼容：顶层键在 section 之前）
        if (trimmed === '') {
            // 不重置，TOML 的 section 一旦开始就持续到下一个 section
            continue;
        }
        // 只读取顶层（section 之前的）键值
        if (!inSection) {
            const match = trimmed.match(new RegExp(`^${key}\\s*=\\s*"([^"]*)"`, 'i'));
            if (match) return match[1];
            const matchSingle = trimmed.match(new RegExp(`^${key}\\s*=\\s*'([^']*)'`, 'i'));
            if (matchSingle) return matchSingle[1];
        }
    }
    return '';
}

// TOML 简易写入：替换或添加顶层键值对
function writeTomlValue(content: string, key: string, value: string): string {
    const lines = content.split('\n');
    const pattern = new RegExp(`^${key}\\s*=`);
    let found = false;
    let firstSectionIndex = -1;

    for (let i = 0; i < lines.length; i++) {
        const trimmed = lines[i].trim();
        // 记录第一个 [section] 的位置
        if (firstSectionIndex === -1 && /^\[.+\]$/.test(trimmed)) {
            firstSectionIndex = i;
        }
        // 只在 section 之前查找替换
        if (firstSectionIndex === -1 || i < firstSectionIndex) {
            if (pattern.test(trimmed)) {
                lines[i] = `${key} = "${value}"`;
                found = true;
                break;
            }
        }
    }

    if (!found) {
        // 在第一个 section 之前插入，或在文件末尾
        const newLine = `${key} = "${value}"`;
        if (firstSectionIndex > 0) {
            lines.splice(firstSectionIndex, 0, newLine);
        } else if (firstSectionIndex === 0) {
            lines.unshift(newLine);
        } else {
            // 没有 section，追加到末尾
            lines.push(newLine);
        }
    }

    return lines.join('\n');
}

// --- 导出函数 ---

/**
 * 读取当前模型信息
 */
export async function getCurrentModelInfo(readConfig: () => Promise<any>): Promise<any> {
    try {
        if (!fs.existsSync(CONFIG_PATH)) return null;
        const content = fs.readFileSync(CONFIG_PATH, 'utf-8');

        const model = readTomlValue(content, 'default_model');
        if (!model) return null;

        const apiKey = readTomlValue(content, 'api_key');
        const provider = readTomlValue(content, 'default_provider');

        // ZeroClaw 没有独立的 baseUrl 字段，provider 决定了端点
        // 如果是 custom:https://... 格式，提取 baseUrl
        let baseUrl = '';
        if (provider.startsWith('custom:')) {
            baseUrl = provider.replace('custom:', '');
        }

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
        const configDir = path.dirname(CONFIG_PATH);
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }

        let content = '';
        if (fs.existsSync(CONFIG_PATH)) {
            content = fs.readFileSync(CONFIG_PATH, 'utf-8');
        }

        // 写入 API Key
        if (modelInfo.apiKey) {
            content = writeTomlValue(content, 'api_key', modelInfo.apiKey);
        }

        // 写入模型名
        const model = modelInfo.model || modelInfo.name || '';
        if (model) {
            content = writeTomlValue(content, 'default_model', model);
        }

        // 设置 provider
        // 如果有自定义 baseUrl，使用 custom:URL 格式
        // 否则默认 openrouter
        if (modelInfo.baseUrl) {
            // 去掉末尾的 /v1 等路径（ZeroClaw 自己会加）
            let cleanUrl = modelInfo.baseUrl.replace(/\/v1\/?$/, '').replace(/\/$/, '');
            content = writeTomlValue(content, 'default_provider', `custom:${cleanUrl}`);
        } else {
            content = writeTomlValue(content, 'default_provider', 'openrouter');
        }

        // 写入文件
        fs.writeFileSync(CONFIG_PATH, content, 'utf-8');

        return {
            success: true,
            message: `Model "${model}" applied to ZeroClaw successfully.`
        };
    } catch (error: any) {
        return {
            success: false,
            message: error.message || 'Unknown error'
        };
    }
}
