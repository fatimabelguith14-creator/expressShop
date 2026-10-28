const { getProductById , checkStock } = require('../../src/catalog/catalogService');
test('getProductById renvoie le produit pour un id existant', async() => {
    const product = await getProductById(1);

    expect(product).toEqual({ id: 1, name: 'Casque Bluetooth', category: 'audio', price: 89.9, stock: 12 });
});

test('getProductById renvoie undefined pour un id inexistant', async() => {
    expect.assertions(1);
    await expect(getProductById(999)).rejects.toThrow('Produit introuvable : 999');
});

test('checkStock renvoie false si le stock est insuffisant', async() => {
    await expect(checkStock(2,1)).resolves.toBe(false);

});