import BusinessInfo from './components/BusinessInfo/index'

import { MOCK_BUSINESS } from './mocks';

import styles from './index.module.scss';

export default function BookingConsole() {

  const businessInfo = MOCK_BUSINESS; 

  return (
    <div className={styles.container}>
      <BusinessInfo business={businessInfo}/>
    </div>
  )
}