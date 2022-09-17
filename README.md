# convert files extension
Convert Files Extension from any to any

## install
```js
    npm i convert-files-extension
```
```js
    yarn add convert-files-extension
```

> hint: this snipped, work on linux base os.


### implementation

```js

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

```

### usage

Replace your directory path with `YOUR_DIRECTORY_PATH`, your source extention with `SOURCE_EXT` and destination extention with `DEST_EXT`.
```js
changeFilesExtension('YOUR_DIRECTORY_PATH', 'SOURCE_EXT', 'DEST_EXT');

```
