import React, { useState } from 'react';
import Router from 'next/router';
import styles from './SearchBox.scss';

const SearchBox = () => {
  const [q, setQ] = useState('');
  const [animation, setAnimation] = useState('');
  const placeHolderDefault = 'Nunca dejes de buscar';
  const [placeHolder, setPlaceHolder] = useState(placeHolderDefault);

  const submitQuery = e => {
    e.preventDefault();

    if (q !== ``) {
      Router.push(`/items?q=${q}&limit=4`);
      return null;
    }

    setAnimation(styles['search-box__error']);
    setPlaceHolder('Y o que buscas hoy?');

    setTimeout(() => {
      setAnimation('');
    }, 500);
  };

  return (
    <div className={`${animation} ${styles['search-box']}`} onSubmit={submitQuery}>
      <form autoComplete="on">
        <input
          className={styles['search-box_field']}
          type="text"
          onChange={event => setQ(event.target.value)}
          onFocus={() => {
            setPlaceHolder(placeHolderDefault);
          }}
          placeholder={placeHolder}
          autoFocus
        />
        <button className={styles['search-box_submit-button']} type="submit" />
      </form>
    </div>
  );
};

export default SearchBox;
