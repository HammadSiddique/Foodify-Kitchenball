const {
  stringLength, reverseString, Calculator, capitalize,
} = require('./function.js');

describe('String length', () => {
  test('Characters of (Hello) equals 5', () => {
    expect(stringLength('Hello')).toBe(5);
  });

  test('Empty string should return (empty)', () => {
    expect(stringLength('')).toBe('empty');
  });
});

test('(world) revesed equal to (dlrow)', () => {
  expect(reverseString('world')).toBe('dlrow');
});

describe('Calculator', () => {
  const math = new Calculator(6, 2);
  test('Add: 6 plus 2', () => {
    expect(math.add()).toBe(8);
  });

  test('Subtract: 6 minus 2', () => {
    expect(math.subtract()).toBe(4);
  });

  test('Divide  : 6 on 2', () => {
    expect(math.divide()).toBe(3);
  });

  test('Multiply : 6 times 2', () => {
    expect(math.multiply()).toBe(12);
  });
});

test('Capitalize: code equal to Code', () => {
  expect(capitalize('code')).toBe('Code');
});