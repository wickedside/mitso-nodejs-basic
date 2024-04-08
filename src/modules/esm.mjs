// импорт модулей ESM
import path from 'path';
import os from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

// получение переменных из модуля os
const { release, version } = os;

// генерация случайного числа
const random = Math.random();

// динамический импорт JSON файлов в зависимости от значения random
let unknownObject;
if (random > 0.5) {
    import('./files/a.json').then(module => {
        unknownObject = module.default;
        console.log(unknownObject);
    });
} else {
    import('./files/b.json').then(module => {
        unknownObject = module.default;
        console.log(unknownObject);
    });
}

// вывод информации в консоль
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

// отображение пути к текущему файлу и каталогу
console.log(`Path to current file is ${path.fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(path.fileURLToPath(import.meta.url))}`);

// создание и запуск сервера
const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;
myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// экспорт переменных
export {
    unknownObject,
    myServer,
};