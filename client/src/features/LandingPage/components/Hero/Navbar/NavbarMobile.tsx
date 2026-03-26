import searchIcon from '../../../../../assets/search_icon.svg';
import menuIcon from '../../../../../assets/menu_icon.svg';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <img 
          src={searchIcon} 
          alt="przycisk szukania"
          className={styles.icon}
        />
      </div>
      <div className={styles.hamburgerBtn}>
        <img 
          src={menuIcon} 
          alt="przycisk menu"
          className={styles.icon}
        />  
      </div>
    </div>
  )
}