import closeIcon from '../../../../../assets/close_icon.svg';

import styles from './SearchMenuMobile.module.scss';

export default function SearchMenu({closeMenu}: {closeMenu: () => void}) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <input 
          type="text" 
          className={styles.searchbar}
        />
        <img 
          src={closeIcon} 
          alt="zamknij wyszukiwanie"
          className={styles.closeIcon}
          onClick={closeMenu}
        />
      </div>
    </div>
  )
}