import closeIcon from '../../../../../assets/close_icon.svg';
import { useAuth } from '../../../../../context/AuthContext';

import styles from './MenuMobile.module.scss';

interface MenuMobileProps {
  isOpen: boolean,
  closeMenu: () => void
}

export default function MenuMobile({isOpen, closeMenu}: MenuMobileProps) {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : null}`} >
      <div className={styles.header}>
        <div></div>
        <div className={styles.logo}>REZERVISE</div>
        <img className={styles.closeButton} onClick={closeMenu} src={closeIcon} alt="zamknij menu" />
      </div>
      <div className={styles.menu}>
        {
          !isAuthenticated ?
          <>
            <div className={styles.menuElement}>Jak to działa?</div>
            <div className={styles.menuElement}>Cennik</div>
            <div className={styles.menuElement}>Kontakt</div>
            <div className={styles.login}>
              <div className={styles.loginElement} onClick={login}>Zaloguj się</div>
              <div className={styles.loginElement} onClick={login}>Stwórz konto</div>
            </div>
          </>
          :
          <>
            <div className={styles.menuElement}>Kalendarz</div>
            <div className={styles.menuElement}>Moje usługi</div>
            <div className={styles.menuElement}>Ustawienia</div>
            <div className={styles.logout} onClick={() => {logout(); closeMenu();}}>Wyloguj</div>
          </>
        }
      </div>
    </div>
  )
}