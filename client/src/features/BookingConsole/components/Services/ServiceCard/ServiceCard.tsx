import type { ServiceInterface } from '../../../types';

import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  service: ServiceInterface,
  selectService: (service: ServiceInterface) => void,
}

export default function ServiceCard({ service, selectService }: ServiceCardProps) {
  return (
    <div className={styles.container} onClick={() => selectService(service)}>
      <div className={styles.name}>
        {service.name}
      </div>
      <div className={styles.price}>
        {`${service.price} PLN`}
      </div>
    </div>
  )
}