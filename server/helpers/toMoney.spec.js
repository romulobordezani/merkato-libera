const toMoney = require('./toMoney');

describe('Numbers in money format', () => {
  it('Returns expected strings with points each thousand', () => {
    expect(toMoney(5400)).toBe('5.400');
    expect(toMoney(-5400)).toBe('-5.400');
    expect(toMoney(1000000000)).toBe('1.000.000.000');
    expect(toMoney(200.80)).toBe('200');
  });
});
