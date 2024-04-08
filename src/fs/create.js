const fs = require('fs').promises;
const path = require('path');

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
        } else {
            throw error;
        }
    }
};

await create();