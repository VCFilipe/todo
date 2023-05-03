import { MdAddCircleOutline } from 'react-icons/md'

import List from './components/List'
import { WeekDayProps } from './components/WeekDay'

export default function Todo() {
  const list: WeekDayProps[] = [
    {
      day: 'Segunda-Feira',
      tasks: [
        {
          title: 'Study Next js',
          isChecked: false,
        },
      ],
    },
    {
      day: 'Terça-Feira',
      tasks: [
        {
          title: 'Practice Duo Lingo',
          isChecked: false,
        },
      ],
    },
    {
      day: 'Quarta-Feira',
      tasks: [
        {
          title: 'Read a book',
          isChecked: false,
        },
        {
          title: 'Go to the Gym',
          isChecked: false,
        },
      ],
    },
    {
      day: 'Quinta-Feira',
      tasks: [
        {
          title: 'Drink a coffee',
          isChecked: false,
        },
      ],
    },
    {
      day: 'Sexta-Feira',
      tasks: [
        {
          title: 'drink 2L water',
          isChecked: false,
        },
      ],
    },
  ]
  return (
    <div className="w-full max-w-screen-xl  p-4 h-full flex flex-col gap-8 ">
      <div className="w-full flex flex-col justify-center  ">
        <h1 className="text-7xl font-bold">To do on the week</h1>
        <h2 className="ml-8 opacity-70">Write your daily activities</h2>
      </div>
      <div className="flex justify-center my-8 gap-10">
        <input
          className="border-gray-700 shadow-sm border-2 py-2 px-4 w-2/4 rounded-xl focus:border-cyan-600 focus:outline-none "
          placeholder="Write a new task..."
        />
        <button className="py-2 px-6 bg-cyan-600 rounded-xl text-white shadow-sm font-bold flex justify-center items-center gap-2">
          Add
          <MdAddCircleOutline size={20} className="bg-transparent" />
        </button>
      </div>
      <div className="flex flex-col w-full  flex-wrap ">
        <List list={list} />
      </div>
    </div>
  )
}
