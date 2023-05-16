import Link from 'next/link';
import React from 'react';

import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <Link href="/">
      <img
        className={styles.logo_img}
        src="/images/Logo_ML.png"
        srcSet="/images/Logo_ML@2x.png.png 1000w, /images/Logo_ML@2x.png.png  2000w"
        alt="Mercado Livre"
      />
    </Link>
  </div>
);

export default Logo;
