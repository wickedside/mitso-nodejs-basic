const fs = require('fs').promises;
const path = require('path');

const list = async () => {
    const dirPath = path.join(__dirname, 'files');
    try {
        const files = await fs.readdir(dirPath);
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();