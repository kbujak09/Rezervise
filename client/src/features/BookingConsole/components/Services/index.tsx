import type { ServiceInterface } from '../../types';
import ServiceCard from './ServiceCard';

import styles from './index.module.scss';

interface ServicesProps {
  services: ServiceInterface[]
}
  
export default function Services({services}: ServicesProps) {
  return (
    <div className={styles.container}>
      {
        services.map((data) => {
          return (
            <ServiceCard service={data}/>
          )
        })
      }
    </div>
  )
}