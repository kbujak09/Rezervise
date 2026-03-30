import { useState } from 'react';

import searchIcon from '../../../../../assets/search_icon.svg';
import menuIcon from '../../../../../assets/menu_icon.svg';

import styles from './NavbarMobile.module.scss';

interface NavbarMobileProps {
  setOpenElement: (element: 'search'|'menu'|'') => void
}

export default function NavbarMobile({setOpenElement}: NavbarMobileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <img 
          src={searchIcon} 
          alt="przycisk szukania"
          className={styles.icon}
          onClick={() => setOpenElement('search')}
        />
      </div>
      <div className={styles.hamburgerBtn}>
        <img 
          src={menuIcon} 
          alt="przycisk menu"
          className={styles.icon}
          onClick={() => setOpenElement('menu')}
        />  
      </div>
    </div>
  )
}