import { useState } from 'react';

import BusinessInfo from './components/BusinessInfo/index'
import Services from './components/Services';

import { MOCK_BUSINESS, MOCK_SERVICES } from './mocks';

import styles from './index.module.scss';

export default function BookingConsole() {

  const [businessInfo, setBusinessInfo] = useState(MOCK_BUSINESS); 
  const [services, setServices] = useState(MOCK_SERVICES);

  return (
    <div className={styles.container}>
      <BusinessInfo business={businessInfo}/>
      <Services services={services}/>
    </div>
  )
}