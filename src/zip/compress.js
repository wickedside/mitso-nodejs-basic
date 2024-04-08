const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const compress = async () => {
    const fileToCompress = path.join(__dirname, 'fileToCompress.txt');
    const compressedFile = path.join(__dirname, 'archive.gz');
    const readStream = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(compressedFile);
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();