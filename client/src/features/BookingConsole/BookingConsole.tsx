import { useState } from 'react';

import BusinessInfo from './components/BusinessInfo'
import Services from './components/Services';
import Calendar from './components/Calendar';
import type { ServiceInterface, BusinessInterface } from './types';

import { MOCK_BUSINESS, MOCK_SERVICES, MOCK_WORKING_HOURS, MOCK_APPOINTMENTS } from './mocks';

import styles from './BookingConsole.module.scss';

export default function BookingConsole({business}: {business: BusinessInterface}) {

  const [businessInfo, setBusinessInfo] = useState(business); 
  const [services, setServices] = useState(MOCK_SERVICES);
  const [workingHours, setWorkingHours] = useState(MOCK_WORKING_HOURS);
  const [appointments, setAppointments] = useState(MOCK_APPOINTMENTS);

  const [chosenService, setChosenService] = useState<ServiceInterface>();

  const selectService = (service: ServiceInterface) => {
    setChosenService(service);
  }

  return (
    <div className={styles.container}>
      <BusinessInfo business={businessInfo}/>
      { 
        !chosenService ? (
          <Services 
            services={services} 
            categories={businessInfo.categoryOrder}
            selectService={selectService} 
          />
        ) : (
          <Calendar 
            chosenService={chosenService}
          />
        )
      }
    </div>
  )
}