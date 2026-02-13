import type { BusinessInterface } from '../../types';

interface BusinessInfoProps {
  business: BusinessInterface;
}

import styles from './index.module.scss';

export default function BusinessInfo({business}: BusinessInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {business.name}
      </div>
      <div className={styles.description}>
        {business.description}
      </div>
      <div className={styles.address}>
        <div className={styles.street}>
          {business.address},
        </div>
        <div className={styles.city}>
          {business.city}
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.phone}>
          <a href=''>{business.phone}</a>
        </div>
        |
        <div className={styles.email}>
          <a href=''>{business.email}</a>
        </div>
      </div>
    </div>
  )
}