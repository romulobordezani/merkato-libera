import React from 'react';
import renderer from 'react-test-renderer';

import Price from './Price';

const ItemMock = require('../../__mocks__/Item');

describe('Price', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<Price item={ItemMock} />)).toMatchSnapshot();
  });
});
