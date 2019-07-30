import React from 'react';
import renderer from 'react-test-renderer';

import NoResults from './NoResults';

describe('NoResults', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<NoResults />)).toMatchSnapshot();
  });
});
