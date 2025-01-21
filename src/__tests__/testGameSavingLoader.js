import GameSavingLoader from '../controllers/GameSavingLoader.js'

const gameSavingLoader = new GameSavingLoader();

const testTask2 = () => {
    test('test async GameSavingLoader', () => {
        return gameSavingLoader.load().then(response => {
            expect(response).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
        })
            .catch(e => expect(e).toStrictEqual(new Error('File not found')));
    })
}

for (let i = 0; i < 4; i++) testTask2()

// test('test async reject', async () => {
//     await expect(gameSavingLoader.load()).rejects.toThrow();
//     expect.assertions(1);
// })

// test('test async resolve', async () => {
//     await expect(gameSavingLoader.load()).resolves
//         .toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}')
//     expect.assertions(1);
// })

