
interface HeaderVertical {
  active: string
}


export default function HeaderVertical({active}: HeaderVertical) {
  return (
    <div className="flex flex-col gap-7 items-center justify-star fixed top-96 right-14 z-10">
      <a className={`size-3 border-2 border-darkpurple-100 transition-all ${active === "main" ? "bg-transparent scale-175 rotate-0" : "bg-darkpurple-100 rotate-45"} ease-out`} href="#main" />
      <a className={`size-3 border-2 border-darkpurple-100 transition-all ${active === "my-work" ? "bg-transparent scale-175 rotate-0" : "bg-darkpurple-100 rotate-45"} ease-out`} href="#my-work"/>
      <a className={`size-3 border-2 border-darkpurple-100 transition-all ${active === "about-me" ? "bg-transparent scale-175 rotate-0" : "bg-darkpurple-100 rotate-45"} ease-out`} href="#about-me" />
      <a className={`size-3 border-2 border-darkpurple-100 transition-all ${active === "contact-me" ? "bg-transparent scale-175 rotate-0" : "bg-darkpurple-100 rotate-45"} ease-out`} href="#contact-me" />
    </div>
  )
}