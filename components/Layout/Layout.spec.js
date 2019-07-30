import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './Layout';

describe('Layout', () => {
  it('Snapshot renders default', () => {
    expect(
      renderer.create(
        <Layout>
          <div>Hola Mundo!</div>
        </Layout>
      )
    ).toMatchSnapshot();
  });
});
