import Navbar from './Navbar';

import styles from './Hero.module.scss';

interface HeroInterface {
  title: string,
  subtitle: string
}

export default function Hero({title, subtitle}: HeroInterface) {
  return (
    <header className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.subtitle}>
        {subtitle}
      </div>
      <Navbar />
    </header>
  )
}