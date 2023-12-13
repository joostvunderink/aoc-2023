import * as fs from 'fs';

export function log(str) {
    if (process.env.LOG) {
        console.log(str);
    }
}

export function readInputFile() {
    const data = fs.readFileSync('input');
    return data.toString();
}
