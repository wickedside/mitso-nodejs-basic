const fs = require('fs');
const path = require('path');

const read = async () => {
    const filePath = path.join(__dirname, 'fileToRead.txt');
    const readStream = fs.createReadStream(filePath, 'utf-8');
    readStream.pipe(process.stdout);
};

await read();