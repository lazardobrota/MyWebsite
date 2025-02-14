import { HTMLAttributes, ChangeEventHandler } from "react";

interface TextAreaInfo<T> extends HTMLAttributes<T> {
  name: string,
  placeholder: string
  onChange?: ChangeEventHandler<T>;
}

export default function TextArea({name, placeholder, onChange, ...props}: TextAreaInfo<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="name">{name}</label>
      <textarea id="name" required onChange={onChange} className="bg-gray-250 rounded-2xl text-xl lg:text-2xl px-6 py-2 lg:px-8 lg:py-4 focus-visible:shadow-inner  focus-visible:ring-2 ring-gray-500" placeholder={placeholder}/>
    </div>
  )
} 