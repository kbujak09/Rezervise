import { useState } from 'react';

import searchIcon from '../../../../../assets/search_icon.svg';
import menuIcon from '../../../../../assets/menu_icon.svg';
import closeIcon from '../../../../../assets/close_icon.svg';
import Searchbar from './Searchbar';

import styles from './Navbar.module.scss';

export default function NavbarMobile() {
  const [openElement, setOpenElement] = useState<'search'|'menu'|null>(null);

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
        {
          openElement !== 'search' ?
          <img 
            src={menuIcon} 
            alt="przycisk menu"
            className={styles.icon}
            onClick={() => setOpenElement('menu')}
          />  
          :
          <img
            src={closeIcon}
            alt="przycisk zamykający pasek szukania"
            className={styles.icon}
            onClick={() => setOpenElement(null)}
          />
        }
      </div>
    </div>
  )
}