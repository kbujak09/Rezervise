import type { ServiceInterface } from '../../../types';

import styles from './index.module.scss';

interface ServiceCardProps {
  service: ServiceInterface
}

export default function ServiceCard({service}: ServiceCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {service.name}
      </div>
      <div className={styles.price}>
        {`${service.price} PLN`}
      </div>
    </div>
  )
}