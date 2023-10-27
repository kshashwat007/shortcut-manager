import * as fs from '@tauri-apps/api/fs';
import * as os from '@tauri-apps/api/os';
import * as tauriPath from '@tauri-apps/api/path';
import { currentMonitor, getCurrent } from '@tauri-apps/api/window';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import packageJson from '../package.json';
import tauriConfJson from '../src-tauri/tauri.conf.json';

export const HEADER_TITLE = 'HEADER_TITLE goes here';
export const FOOTER = 'FOOTER goes here';
export const APP_NAME = tauriConfJson.package.productName;
export const VERSION = packageJson.version;
export const WINDOW_TITLE = 'WINDOW_TITLE set in utils.js';
const EXTS = new Set(['.json']);
// save tauri store 500ms after last set
const SAVE_DELAY = 500;
export const RUNNING_IN_TAURI = window.__TAURI__ !== undefined;
export const IS_DEVELOPMENT = import.meta.env.MODE === 'development';
export const IS_PRODUCTION = !IS_DEVELOPMENT;


export async function getUserAppFiles() {
    // returns an array of files from $DOCUMENT/$APP_NAME/* with extension that is in EXTS
    //  implying that the app (tauri-plugin-store) can parse the files
    // returns [] if $DOCUMENT/$APP_NAME is a file
    const documents = await tauriPath.documentDir();
    const saveFiles = [];
    await fs.createDir(APP_NAME, { dir: fs.BaseDirectory.Document, recursive: true });
    const entries = await fs.readDir(APP_NAME, { dir: fs.BaseDirectory.AppData, recursive: true });
    if (entries !== null) {
        const osType = await os.type();
        const sep = osType === 'Windows_NT' ? '\\' : '/'
        const appFolder = `${documents}${sep}${APP_NAME}`;
        for (const { path } of flattenFiles(entries)) {
            const friendlyName = path.substring(appFolder.length + 1, path.length);
            if (EXTS.has(getExtension(path).toLowerCase())) saveFiles.push({ path, name: friendlyName });
        }
    }
    return saveFiles;
}
