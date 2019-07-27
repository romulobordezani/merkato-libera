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
    this.picture = item.thumbnail || item.pictures[0].secure_url;
    this.condition = item.condition;
    this.free_shipping = item.shipping.free_shipping;
    this.sold_quantity = item.sold_quantity;
  }
}

module.exports = Item;
