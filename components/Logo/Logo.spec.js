import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './Logo';

describe('Logo', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<Logo />)).toMatchSnapshot();
  });
});
