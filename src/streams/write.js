const fs = require('fs');
const path = require('path');

const write = async () => {
    const filePath = path.join(__dirname, 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();