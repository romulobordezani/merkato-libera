import React from 'react';
import renderer from 'react-test-renderer';

import SearchItem from './SearchItem';

const ItemMock = require('../../__mocks__/Item');

describe('SearchItem', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<SearchItem item={ItemMock} />)).toMatchSnapshot();
  });
});
