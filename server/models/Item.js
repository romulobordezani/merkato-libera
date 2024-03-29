const { getDecimals, toMoney } = require('../helpers');

class Item {
  constructor(item) {
    const pictureUrl = 'pictures' in item ? item.pictures[0].secure_url : item.thumbnail;
    this.id = item.id;
    this.title = item.title;
    this.price = {
      currency: item.currency_id === 'ARS' ? '$' : item.currency_id,
      amount: toMoney(item.price),
      decimals: getDecimals(item.price)
    };
    this.picture = pictureUrl;
    this.condition = item.condition;
    this.free_shipping = item.shipping.free_shipping;
    this.sold_quantity = item.sold_quantity;
    this.permalink = item.permalink;
  }
}

module.exports = Item;
