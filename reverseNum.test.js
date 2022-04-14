let reverseNum = require("./reverseNum.js");

//'toBe()'
test('reverses the number',() => {
    num = 56443
    expect(
        reverseNum(num)).toBe(34465)
});

// 'toHaveReturned()'
test('reverseNum returns',()=>{
    reverseNum = jest.fn(() => true);
    reverseNum(98765);
  expect(reverseNum).toHaveReturned();
});

//'toBeTruthy()'
test('If Truthy',()=>{
    expect(reverseNum(12345)).toBeTruthy()
});