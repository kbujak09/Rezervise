import type { AppointmentInterface, DayScheduleInterface } from '../../types';

import styles from './index.module.scss';

interface CalendarProps {
  workingHours: DayScheduleInterface[],
  appointments: AppointmentInterface[],
}

export default function Calendar({workingHours, appointments}: CalendarProps) {
  console.log(workingHours, appointments);
  return (
    <div className={styles.container}>
      calendar
    </div>
  )
}