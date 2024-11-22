
export default function HeaderVertical() {
  return (
    <div className="flex flex-col gap-7 items-center justify-star fixed top-96 right-14 z-10">
      <a className="size-3 border-2 border-darkpurple-100 bg-darkpurple-100 rotate-45 transition-transform hover:bg-transparent hover:scale-175 hover:rotate-0 ease-out" href="#main" />
      <a className="size-3 border-2 border-darkpurple-100 bg-darkpurple-100 rotate-45 transition-transform hover:bg-transparent hover:scale-175 hover:rotate-0 ease-out" href="#my-work"/>
      <a className="size-3 border-2 border-darkpurple-100 bg-darkpurple-100 rotate-45 transition-transform hover:bg-transparent hover:scale-175 hover:rotate-0 ease-out" href="#about-me" />
      <a className="size-3 border-2 border-darkpurple-100 bg-darkpurple-100 rotate-45 transition-transform hover:bg-transparent hover:scale-175 hover:rotate-0 ease-out" href="#contact-me" />
    </div>
  )
}