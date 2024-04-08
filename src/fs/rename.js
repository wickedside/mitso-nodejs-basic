const fs = require('fs').promises;
const path = require('path');

const rename = async () => {
    const srcPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const destPath = path.join(__dirname, 'files', 'properFilename.md');
    try {
        await fs.rename(srcPath, destPath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();