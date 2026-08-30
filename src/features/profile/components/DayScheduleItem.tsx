import type { DayOfTheWeekType } from "../types.ts";

interface Props {
  dayOfTheWeek: DayOfTheWeekType
}

export default function DayScheduleItem({ dayOfTheWeek }: Props) {
  return (
    <div className='w-3xl p-4 h-full flex items-center border border-gray-200'>
      <div className='tracking-wide font-semibold'>
        {dayOfTheWeek}
      </div>
      <div>

      </div>
    </div>
  )
}