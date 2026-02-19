import { useMemo } from 'react';

import type { ServiceInterface } from '../../types';
import ServiceCard from './ServiceCard';
import { groupServices } from '../../../../utils/Services/helpers';

import styles from './index.module.scss';

interface ServicesProps {
  services: ServiceInterface[],
  categories: string[]
}
  
export default function Services({ services, categories }: ServicesProps) {

  const groupedServices = useMemo(() => {
    return groupServices({ categories, services });
  }, [categories, services]);

  return (
    <div className={styles.container}>
      {
        groupedServices.map((group) => (
          <div key={group.name} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{ group.name }</h3>
            <div className={styles.categoryItems}>
              {
                group.items.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                  />
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}