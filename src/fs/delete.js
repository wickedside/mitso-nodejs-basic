const fs = require('fs').promises;
const path = require('path');

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    try {
        await fs.unlink(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();