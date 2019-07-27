function getDecimals(n) {
  if (typeof n === 'string') {
    n = n.replace(',', '.'); // Replaces commas with dots
  }
  n = Math.abs(n); // makes it positive if negative
  const onlyDecimals = (n - Math.floor(n)).toFixed(2); // Extracts decimals
  const stringedDecimal = (onlyDecimals + '').split('.'); // converts to string and removes first portion
  const finalAsNumber = parseInt(stringedDecimal[1], 10);

  if (finalAsNumber > 0) {
    return finalAsNumber;
  }

  return ''
}

module.exports = getDecimals;
