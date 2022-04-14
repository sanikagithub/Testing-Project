//'toHaveLength()'
let ShoppingList = require("./shopping.js");
test('the shopping list length', () => {
    expect(ShoppingList).toHaveLength(5);
});