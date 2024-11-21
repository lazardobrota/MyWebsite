export default function Header() {
  return (
    <div className="flex flex-row sticky top-0 justify-center gap-8 px-5 py-5 bg-darkpurple-300 drop-shadow-2xl z-10">
      <a className="text-white" href="#main">Home</a>
      <a className="text-white" href="#my-work">My Work</a>
      <a className="text-white" href="#about-me">About Me</a>
      <a className="text-white" href="#contact-me">Contact Me</a>
    </div>
  )
}