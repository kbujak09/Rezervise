import DayScheduleItem from "./DayScheduleItem.tsx";
import type { DayOfTheWeekType } from "../types.ts";

export default function WeeklySchedule() {
  const week = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']

  return (
    <div className='h-full flex flex-col ml-8'>
      <h1 className='text-center font-bold mb-4 text-[22px]'>Godziny Pracy</h1>
      <div className='grid grid-rows-7 flex-1 items-center mx-6 mb-6 shadow-gray-400 border border-gray-300'>
        {
          week.map((day, index) => {
            return (
              <DayScheduleItem dayOfTheWeek={day as DayOfTheWeekType} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}