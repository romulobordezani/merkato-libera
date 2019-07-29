function toMoney (amount) {
  let integer = amount.toString().split('.')[0];
  return integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

module.exports = toMoney;
