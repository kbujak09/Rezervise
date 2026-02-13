import type { BusinessInterface } from '../../types';

import styles from './index.module.scss';

interface BusinessInfoProps {
  business: BusinessInterface;
}

export default function BusinessInfo({business}: BusinessInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={business.imageUrl} alt={business.slug} />
      </div>
      <div className={styles.text}>
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
      </div>
    </div>
  )
}