const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'fileToCalculateHashFor.txt');
    try {
        const data = await fs.readFile(filePath);
        const hash = crypto.createHash('sha256');
        hash.update(data);
        const hexHash = hash.digest('hex');
        console.log(hexHash);
    } catch (error) {
        console.error('Error reading or hashing file:', error.message);
    }
};

await calculateHash();