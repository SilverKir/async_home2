import { setTimeout } from "core-js";

// export default async function readMock() {
//     const result = await read();
//     const asyncMock = jest
//         .fn()
//         .mockResolvedValueOnce(result)
//         .mockRejectedValueOnce(new Error('Async error message'));

//     return asyncMock();
// }


export function read() {
    return new Promise((resolve, reject) => {
        // эмуляция чтения файла
        const trigger = Math.random() > 0.5;
        if (trigger) {
            setTimeout(() => {
                const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
                return (input => {
                    const buffer = new ArrayBuffer(input.length * 2);
                    const bufferView = new Uint16Array(buffer);
                    for (let i = 0; i < input.length; i++) {
                        bufferView[i] = input.charCodeAt(i);
                    }
                    resolve(buffer);
                })(data);
            }, 1000);
        } else {
            setTimeout(() => {
                reject('File not found');
            }, 1000);
        }
    })
}