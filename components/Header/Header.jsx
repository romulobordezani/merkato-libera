import style from './Header.scss';
import antiBlinkStyle from './HeaderAntiBlink.style';
import InstantLogo from './InstantLogo';

const Header = () => {
  return (
    <header className={style.header} style={antiBlinkStyle}>
      <div className={style.SearchBox}>
        <InstantLogo />
      </div>
    </header>
  );
};

export default Header;
