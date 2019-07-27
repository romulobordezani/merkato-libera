import { useState } from 'react';
import Router from 'next/router';

import Layout from '../components/Layout';
import { envIgniter } from '../igniters';

const Index = () => {
  const [q, setQ] = useState('');

  const submitQuery = () => {
    Router.push(`/items?q=${q}&limit=4`);
  };

  return (
    <Layout>
      <input type="text" onChange={event => setQ(event.target.value)} />{' '}
      <button
        type="button"
        onClick={() => {
          submitQuery();
        }}
      >
        Buscar
      </button>
    </Layout>
  );
};

Index.getInitialProps = envIgniter;

export default Index;
