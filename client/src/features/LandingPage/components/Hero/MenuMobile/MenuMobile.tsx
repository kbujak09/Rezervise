import styles from './MenuMobile.module.scss';

interface MenuMobileProps {
  isOpen: boolean,
  closeMenu: () => void
}

export default function MenuMobile({isOpen, closeMenu}: MenuMobileProps) {
  return (
    <div className={`${styles.container} ${isOpen ? styles.open : null}`} >
      <div onClick={closeMenu}>WYJDZ</div>
    </div>
  )
}