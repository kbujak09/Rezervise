import Hero from './components/Hero';

import styles from './LandingPage.module.scss';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Hero
        title='REZERVISE'
        subtitle='Szybkie i łatwe rezerwacje' 
      />
    </div>
  )
}