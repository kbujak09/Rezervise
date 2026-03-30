import { useEffect, useRef } from 'react';

import closeIcon from '../../../../../assets/close_icon.svg';

import styles from './SearchBarMobile.module.scss';

export default function SearchBarMobile({closeMenu}: {closeMenu: () => void}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <input 
          type="text" 
          className={styles.searchbar}
          ref={inputRef}
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