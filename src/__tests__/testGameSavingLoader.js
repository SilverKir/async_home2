import GameSavingLoader from '../controllers/GameSavingLoader.js'

const gameSavingLoader = new GameSavingLoader();

test('test async GameSavingLoader', () => {

    return gameSavingLoader.load().then(response => {
        expect(response).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
    })
        .catch(e => expect(e).toStrictEqual(new Error('File not found')));
})

test('test async reject', async () => {
    await expect(gameSavingLoader.load()).rejects.toThrow();
    expect.assertions(1);
})

test('test async resolve', async () => {
    await expect(gameSavingLoader.load()).resolves
        .toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}')
    expect.assertions(1);
})
