import React from 'react';

import styles from './Header.scss';
import antiBlinkStyle from './HeaderAntiBlink.style';
import Logo from '../Logo';
import SearchBox from '../SearchBox';

const Header = () => {
  return (
    <div className={`${styles.header}`} style={antiBlinkStyle}>
      <div className={`${styles.header_grid}`}>
        <div className={`${styles.header_grid_wrapper}`}>
          <Logo />
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Header;
