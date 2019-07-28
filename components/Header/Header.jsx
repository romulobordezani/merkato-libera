import React from 'react';
import styles from './Header.scss';

import antiBlinkStyle from './HeaderAntiBlink.style';

import InstantLogo from './InstantLogo';
import SearchBox from '../SearchBox';

const Header = () => {
  return (
    <div className={`${styles.header}`} style={antiBlinkStyle}>
      <div className={`${styles.header__grid_wrapper}`}>
        <div className={`${styles.header__grid_wrapper__logo}`}>
          <InstantLogo />
        </div>
        <div className={`${styles['header__grid_wrapper__search-box']}`}>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Header;
