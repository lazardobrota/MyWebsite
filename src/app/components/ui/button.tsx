import { FormEventHandler, MouseEventHandler } from "react"

interface ButtonInfo<T> {
  name: string
  onClick?: MouseEventHandler<T> | undefined
  onSubmit?: FormEventHandler<T> | undefined
}

export default function Button({name, onClick, onSubmit}: ButtonInfo<HTMLButtonElement>) {
  return (
    <button onSubmit={onSubmit} onClick={onClick} className="bg-darkpurple-100 hover:bg-darkpurple-200 transition-colors text-white text-lg py-2 px-9 lg:px-11 lg:py-3 lg:text-xl  rounded-lg">
      {name}
    </button>
  )
}