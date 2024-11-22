interface InputInfo {
  name: string,
  placeholder: string
}

export default function Input({name, placeholder}: InputInfo) {
  return (
    <div className="flex flex-col gap-2 max-lg:w-full">
      <label htmlFor="name">{name}</label>
      <input id="name" className="bg-gray-250 rounded-2xl text-xl lg:text-2xl px-6 py-2 lg:px-8 lg:py-4" placeholder={placeholder}/>
    </div>
  )
} 