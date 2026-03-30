import { useState } from 'react';

import NavbarMobile from './NavbarMobile';
import SearchBarMobile from './SearchBarMobile';
import MenuMobile from './MenuMobile';

import styles from './Hero.module.scss';

interface HeroInterface {
  title: string,
  subtitle: string
}

export default function Hero({title, subtitle}: HeroInterface) {
  const [openElement, setOpenElement] = useState<'search'|'menu'|''>('');
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.subtitle}>
          {subtitle}
        </div>
        <NavbarMobile setOpenElement={setOpenElement}/>
      </header>
      <MenuMobile isOpen={openElement === 'menu' ? true : false} closeMenu={() => setOpenElement('')} />
      {
        openElement === 'search' ? <SearchBarMobile closeMenu={() => setOpenElement('')} /> : null
      }
    </div>
  )
}