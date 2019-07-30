import React from 'react';
import renderer from 'react-test-renderer';

import CategoriesBreadcrumb from './CategoriesBreadcrumb';

describe('CategoriesBreadcrumb', () => {
  it('Snapshot renders default', () => {
    expect(renderer.create(<CategoriesBreadcrumb />)).toMatchSnapshot();
  });
});
