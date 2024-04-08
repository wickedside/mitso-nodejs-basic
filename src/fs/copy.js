const fs = require('fs').promises;
const path = require('path');

const copy = async () => {
    const srcDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    async function copyRecursive(src, dest) {
        await fs.mkdir(dest, { recursive: true });
        let entries = await fs.readdir(src, { withFileTypes: true });
        for (let entry of entries) {
            let srcPath = path.join(src, entry.name);
            let destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
                await copyRecursive(srcPath, destPath);
            } else {
                await fs.copyFile(srcPath, destPath);
            }
        }
    }

    try {
        await fs.access(srcDir);
        try {
            await fs.access(destDir);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === 'ENOENT') {
                await copyRecursive(srcDir, destDir);
            } else {
                throw error;
            }
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();