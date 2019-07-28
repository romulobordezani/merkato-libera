import grid from '../Grid/Grid.scss';
import antiBlinkStyle from './HeaderAntiBlink.style';

import InstantLogo from './InstantLogo';
import SearchBox from '../SearchBox';

const Header = () => {
  return (
    <header className={`${grid.mainGrid}`} style={antiBlinkStyle}>
      <div className={`${grid.contentBox}`}>
        <InstantLogo />
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
