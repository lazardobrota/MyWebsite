import { LinkInfo } from "@/app/types/card"
import { Badge } from "@/components/ui/badge"

interface CardInfo {
  image_src: string,
  header: string,
  description: string,
  skills: string[],
  links?: LinkInfo[]
}

export default function Card({ image_src, header, description, skills = [], links = [] }: CardInfo) {

  function openInNewTab(links: LinkInfo[]): void {
    links.map((link, index) => {
      if (index == 0)
        window.open(link.url, "_blank")?.focus();
      else if (index == 1)
        window.open(link.url, "_self")?.focus();
    })
  }

  return (
    <div onClick={_ => openInNewTab(links)}  className="p-3 max-w-96 rounded-lg overflow-hidden shadow-round-sm flex flex-col gap-4 transition duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="w-full h-48 overflow-hidden">
        <img className="rounded-lg w-full h-full object-fill" src={image_src} alt={"project image"} />
      </div>
      <p className="font-bold text-4xl">{header}</p>
      <div>
        <div className="flex flex-row gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <Badge className="bg-darkpurple-100 hover:bg-darkpurple-200" key={index}>{skill}</Badge>
          ))}
        </div>
      </div>
      <p>
        {description}
      </p>
      <div className="flex flex-row items-end flex-grow">
        {links.map((link, index) => (
          <a key={index} className="w-1/6" href={link.url}>
            <img key={index} src={link.logo_path} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  )
}