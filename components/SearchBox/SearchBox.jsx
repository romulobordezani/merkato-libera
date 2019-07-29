import React, { useState } from 'react';
import Router from 'next/router';
import styles from './SearchBox.scss';

const SearchBox = () => {
  const [q, setQ] = useState('');

  const submitQuery = e => {
    e.preventDefault();
    console.log(q, 'clicked');
    // TODO - Put some decent error feed back here
    if (q !== ``) {
      Router.push(`/items?q=${q}&limit=4`);
    }
  };

  return (
    <div className={styles['search-box']} onSubmit={submitQuery}>
      <form autoComplete="on">
        <input
          className={styles['search-box_field']}
          type="text"
          onChange={event => setQ(event.target.value)}
          placeholder="Nunca dejes de buscar"
        />
        <button className={styles['search-box_submit-button']} type="submit" />
      </form>
    </div>
  );
};

export default SearchBox;
