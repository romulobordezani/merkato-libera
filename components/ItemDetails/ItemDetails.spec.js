import React from 'react';
import renderer from 'react-test-renderer';

import ItemDetails from './ItemDetails';

const ItemMock = require('../../__mocks__/Item');

describe('ItemDetails', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<ItemDetails item={ItemMock} />)).toMatchSnapshot();
  });
});
