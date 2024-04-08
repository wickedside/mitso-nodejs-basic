const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const decompress = async () => {
    const compressedFile = path.join(__dirname, 'archive.gz');
    const decompressedFile = path.join(__dirname, 'fileToCompress.txt');
    const readStream = fs.createReadStream(compressedFile);
    const writeStream = fs.createWriteStream(decompressedFile);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();