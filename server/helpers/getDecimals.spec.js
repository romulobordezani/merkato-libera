const getDecimals = require('./getDecimals');

describe('Shows only decimals from any Number', () => {
  it('gets Only Decimals', () => {
    expect(getDecimals(54.46)).toBe(46);
  });
});
