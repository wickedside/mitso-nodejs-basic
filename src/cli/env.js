const parseEnv = () => {
    const prefix = 'MITSO_';
    const result = [];
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith(prefix)) {
            result.push(`${key}=${value}`);
        }
    }
    console.log(result.join('; '));
};

parseEnv();