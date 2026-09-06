import { useState, useEffect } from "react";

import DayScheduleItem from "./DayScheduleItem.tsx";
import type { DayOfTheWeekType } from "../types.ts";

const week: DayOfTheWeekType[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

export default function WeeklySchedule() {
  const [openHours, setOpenHours] = useState<Record<string, boolean>>({
    'Poniedziałek': false,
    'Wtorek': false,
    'Środa': false,
    'Czwartek': false,
    'Piątek': false,
    'Sobota': false,
    'Niedziela': false
  });

  useEffect(() => {
    // implement fetching openHours
  }, []);

  const handleIsOpenToggle = (day: DayOfTheWeekType, isChecked: boolean) => {
    setOpenHours(prev => ({
      ...prev,
      [day]: isChecked
    }));
  }

  return (
    <div className='flex flex-col ml-4 h-fit'>
      <h1 className='text-center font-bold text-xl mb-2'>Godziny Otwarcia</h1>
      <div className='grid grid-rows-8 flex-1 items-center my-2 mx-4 py-2 px-6 shadow-[1px_1px_7px_1px_#ccc] rounded-md'>
        <div className='grid grid-cols-[12rem_1fr_12rem] font-bold text-lg  pb-2 px-1 border-b'>
          <span>
            Dzień
          </span>
          <div className='flex gap-4 mx-8'>
            <span className='w-36 text-center'>
             Od
            </span>
            <span className='w-36 text-center'>
             Do
            </span>
          </div>
          <span className='justify-self-end'>
            Czynne
          </span>
        </div>
        {
          week.map((day) => {
            return (
              <DayScheduleItem
                key={day}
                dayOfTheWeek={day}
                isChecked={openHours[day] || false}
                setIsChecked={(isChecked) => handleIsOpenToggle(day, isChecked)}
              />
            )
          })
        }
      </div>
    </div>
  )
}