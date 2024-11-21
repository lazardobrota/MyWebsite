
interface ButtonInfo {
  name: string
}

export default function Button({name}: ButtonInfo) {
  return (
    <button className="bg-darkpurple-100 hover:bg-darkpurple-200  text-white text-lg py-2 px-6 rounded-lg">
      {name}
    </button>
  )
}