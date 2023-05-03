import WeekDay, { WeekDayProps } from './WeekDay'

interface ListProps {
  list: WeekDayProps[]
}

export default function List({ list }: ListProps) {
  return (
    <div className="w-full h-full flex flex-col  gap-8  px-2">
      {list.map((task) => (
        <WeekDay key={task.day} {...task} />
      ))}
    </div>
  )
}
