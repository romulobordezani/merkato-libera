import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('Header', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<Header />)).toMatchSnapshot();
  });
});
