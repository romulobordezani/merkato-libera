import React from 'react';
import renderer from 'react-test-renderer';

import SearchBox from './SearchBox';

describe('SearchBox', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<SearchBox />)).toMatchSnapshot();
  });
});
