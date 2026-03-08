import type { AppointmentInterface, DayScheduleInterface, ServiceInterface } from '../../types';

import styles from './index.module.scss';

interface CalendarProps {
  workingHours: DayScheduleInterface[],
  appointments: AppointmentInterface[],
  chosenService: ServiceInterface,
}

export default function Calendar({workingHours, appointments, chosenService}: CalendarProps) {

  console.log(workingHours, appointments, chosenService);

  const today = new Date();

  console.log(today);

  return (
    <div className={styles.container}>
      calendar
    </div>
  )
}