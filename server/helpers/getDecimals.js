function getDecimals(n) {
  n = Math.abs(n); // makes it positive if negative
  return (n - Math.floor(n)).toFixed(2);
}

module.exports = getDecimals;
