import type { ServiceInterface } from '../../types';

import styles from './Calendar.module.scss';


export default function Calendar(chosenService: ServiceInterface) {
  console.log(chosenService);
  return (
    <div className={styles.container}>
      calendar
    </div>
  )
}