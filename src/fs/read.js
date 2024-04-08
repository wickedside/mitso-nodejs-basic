const fs = require('fs').promises;
const path = require('path');

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    try {
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();