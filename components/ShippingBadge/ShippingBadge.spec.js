import React from 'react';
import renderer from 'react-test-renderer';

import ShippingBadge from './ShippingBadge';

const ItemMock = require('../../__mocks__/Item');

describe('ShippingBadge', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<ShippingBadge item={ItemMock} />)).toMatchSnapshot();
  });
});
