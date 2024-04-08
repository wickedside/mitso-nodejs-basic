const parseArgs = () => {
    const args = process.argv.slice(2); // Удаление первых двух элементов (путь node.exe и путь скрипта)
    const result = [];
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace(/^--/, ''); // Удаление префикса "--"
        if (i + 1 < args.length) {
            const value = args[i + 1];
            result.push(`${key} is ${value}`);
        }
    }
    console.log(result.join(', '));
};

parseArgs();