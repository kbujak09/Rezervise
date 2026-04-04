import closeIcon from '../../../../../assets/close_icon.svg';

import styles from './MenuMobile.module.scss';

interface MenuMobileProps {
  isOpen: boolean,
  closeMenu: () => void
}

export default function MenuMobile({isOpen, closeMenu}: MenuMobileProps) {
  return (
    <div className={`${styles.container} ${isOpen ? styles.open : null}`} >
      <div className={styles.header}>
        <img className={styles.closeButton} onClick={closeMenu} src={closeIcon} alt="zamknij menu" />
        <div className={styles.logo}>REZERVISE</div>
      </div>
    </div>
  )
}