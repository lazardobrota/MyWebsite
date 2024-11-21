interface InputInfo {
  name: string,
  placeholder: string
}

export default function Input({name, placeholder}: InputInfo) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="name">{name}</label>
      <input id="name" className="bg-gray-300 rounded-2xl text-xl px-6 py-2" placeholder={placeholder}/>
    </div>
  )
} 