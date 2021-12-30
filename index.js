import fs from 'fs-extra';
import { exec } from 'child_process';

/**
 * Convert Files Extension
 * 
 * @param {string} path - Directory that contains the files
 * @param {string} from - current extension
 * @param {string} to - destination extension
 */
const changeFilesExtension = async (path, from = 'js', to = 'ts') => {
    try {
        const files = fs.readdirSync(path);
        await files.forEach(f => {
            if (f.split('.')[f.split('.').length - 1] === from) {
                const oldPath = `${path}/${f}`;
                const newPath = `${path}/${f.replace(`.${from}`, `.${to}`)}`;
                exec(`mv ${oldPath} ${newPath}`);
            }
        });
        await console.log('😇 Change extensions successfully');
    } catch (e) {
        await console.log('🛑 Change extensions failed');
        await console.log(e);
    }
}

changeFilesExtension('YOUR_DIRECTORY_PATH');
