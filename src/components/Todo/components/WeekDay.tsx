import Task from './Task'

export interface Items {
  title: string
  isChecked: boolean
}

export interface WeekDayProps {
  day: string
  tasks: Items[]
}

export default function WeekDay({ day, tasks }: WeekDayProps) {
  return (
    <div className="w-full min-h-[6rem]   gap-1  px-2">
      <h1 className="text-2xl p-1 font-semibold border-b-2 mb-4 border-slate-500 rounded-sm">
        {day}
      </h1>
      {tasks.map((item) => (
        <Task key={item.title} item={item} />
      ))}
    </div>
  )
}
