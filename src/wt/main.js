const { Worker } = require('worker_threads');
const os = require('os');

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workers = [];
    const results = [];

    for (let i = 0; i < numCores; i++) {
        workers.push(new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js', { workerData: 10 + i });
            worker.on('message', (result) => resolve({ status: 'resolved', data: result }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        }));
    }

    for (const worker of workers) {
        results.push(await worker);
    }

    console.log(results);
};

await performCalculations();