const getDecimals = require('./getDecimals');

describe('Shows only decimals from any Number', () => {

  it('gets Only Decimals from a good Number', () => {
    expect(getDecimals(54.46)).toBe(46);
  });

  it('gets Only Decimals from a negative Number', () => {
    expect(getDecimals(-54.46)).toBe(46);
  });

});
