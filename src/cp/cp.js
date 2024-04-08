const { spawn } = require('child_process');
const path = require('path');

const spawnChildProcess = async (args) => {
    const scriptPath = path.join(__dirname, 'script.js');

    // создаем дочерний процесс
    const child = spawn('node', [scriptPath, ...args], { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });

    // передаем данные из stdin основного процесса в stdin дочернего процесса
    process.stdin.pipe(child.stdin);

    // перенаправляем stdout дочернего процесса в stdout основного процесса
    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    // обработка события завершения дочернего процесса
    child.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

// для тестирования добавьте аргументы в вызов функции
spawnChildProcess(['arg1', 'arg2']);