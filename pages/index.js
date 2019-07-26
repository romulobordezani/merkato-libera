import React, { useState } from "react";
import Router from 'next/router';

import {Layout} from "../components/Layout";

const Index = () => {

  const [q, setQ] = useState('');

  const submitQuery = () => {
    Router.push(`/items?q=${q}`)
  };

  return (
    <Layout>
      <h1>Mercado Livre Busca: {q} </h1>
      <input type="text" onChange={event => setQ(event.target.value)} />
      <button onClick={() => { submitQuery() }}>Buscar</button>
    </Layout>
  );
};

export default Index;
