function getDecimals(n) {
  n = Math.abs(n); // makes it positive if negative
  const onlyDecimals = (n - Math.floor(n)).toFixed(2);
  const stringedDecimal = (onlyDecimals + '').split('.');
  const finalNumber = parseInt(stringedDecimal[1], 10);
  return finalNumber;
}

module.exports = getDecimals;
