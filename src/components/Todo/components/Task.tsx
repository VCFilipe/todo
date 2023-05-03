'use client'
import { RxCheckCircled, RxPencil2, RxUpdate } from 'react-icons/rx'

import { Items } from './WeekDay'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

interface TaskProps {
  item: Items
}

export default function Task({ item }: TaskProps) {
  const refEditInput = useRef<HTMLInputElement | null>(null)
  const [title, setTitle] = useState(item.title)
  const [isEdit, setIsEdit] = useState(false)

  const handleClickInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [])

  const handleClickEdit = useCallback(() => {
    setIsEdit((state) => !state)
  }, [])

  useEffect(() => {
    if (refEditInput && isEdit) {
      refEditInput.current?.focus()
    }
  }, [isEdit])

  return (
    <div className="flex gap-4  ">
      <input
        ref={refEditInput}
        type="text"
        defaultValue={title}
        className={`w-2/3 h-8 border-b-2 ${
          isEdit ? 'focus:border-yellow-700 focus:outline-none' : undefined
        } border-gray-700 font-semibold text-lg px-2 capitalize`}
        onChange={handleClickInput}
        onBlur={handleClickEdit}
        disabled={!isEdit}
      />
      {!isEdit ? (
        <>
          <button className="w-4 h-8 mt-2">
            <RxCheckCircled
              size={25}
              className="text-white hover:text-slate-400"
            />
          </button>
          <button className="w-4 h-8 mt-2" onClick={handleClickEdit}>
            <RxPencil2
              size={25}
              className="  text-white hover:text-slate-400"
            />
          </button>
        </>
      ) : (
        <button className="w-4 h-8 mt-2" onClick={handleClickEdit}>
          <RxUpdate size={25} className="text-white hover:text-slate-400" />
        </button>
      )}
    </div>
  )
}
