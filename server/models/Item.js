const { getDecimals } = require('../helpers');

class Item {
  constructor(item) {
    this.id = item.id;
    this.title = item.title;
    this.price = {
      currency: item.currency_id,
      amount: Math.trunc(item.price),
      decimals: getDecimals(item.price)
    };
    this.picture = item.pictures[0].secure_url;
  }
}

module.exports = Item;
