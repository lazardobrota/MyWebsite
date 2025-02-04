
interface ButtonInfo {
  name: string
}

export default function Button({name}: ButtonInfo) {
  return (
    <button className="bg-darkpurple-100 hover:bg-darkpurple-200 transition-colors text-white text-lg py-2 px-9 lg:px-11 lg:py-3 lg:text-xl  rounded-lg">
      {name}
    </button>
  )
}