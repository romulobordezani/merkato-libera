import { useState } from 'react';
import Router from 'next/router';

const SearchBox = () => {
  const [q, setQ] = useState('');

  const submitQuery = () => {
    Router.push(`/items?q=${q}&limit=4`);
  };

  return (
    <div>
      <input type="text" onChange={event => setQ(event.target.value)} />{' '}
      <button
        type="button"
        onClick={() => {
          submitQuery();
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBox;
