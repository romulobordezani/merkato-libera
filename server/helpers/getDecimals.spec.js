const getDecimals = require('./getDecimals');

describe('Shows only decimals from any Number', () => {

  it('gets Only Decimals from a good Number', () => {
    expect(getDecimals(54.46)).toBe(46);
    expect(getDecimals(54.46890)).toBe(47);
    expect(getDecimals(54.45990)).toBe(46);
  });

  it('gets Only Decimals from a negative Number', () => {
    expect(getDecimals(-54.46)).toBe(46);
  });

  it('gets Only Decimals from a string', () => {
    expect(getDecimals('54.46')).toBe(46);
  });

  it('gets Only Decimals from a string using comma', () => {
    expect(getDecimals('54,46')).toBe(46);
  });

  it('works with entire Numbers', () => {
    expect(getDecimals('54')).toBe('');
    expect(getDecimals('20004')).toBe('');
  });

});
