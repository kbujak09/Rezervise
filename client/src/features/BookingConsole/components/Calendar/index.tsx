import type { AppointmentInterface, DayScheduleInterface, ServiceInterface } from '../../types';

import styles from './index.module.scss';

interface CalendarProps {
  workingHours: DayScheduleInterface[],
  appointments: AppointmentInterface[],
  chosenService: ServiceInterface,
}

export default function Calendar({workingHours, appointments, chosenService}: CalendarProps) {
<<<<<<< HEAD

  console.log(workingHours, appointments, chosenService);

  const today = new Date();

  console.log(today);

=======
  console.log(workingHours, appointments, chosenService);
>>>>>>> 8f06f406b8ff30ececbc6c1cb3f489e4cb6ac5d8
  return (
    <div className={styles.container}>
      calendar
    </div>
  )
}