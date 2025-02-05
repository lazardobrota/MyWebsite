import { LinkInfo } from "@/app/types/card"
import { Badge } from "@/components/ui/badge"

interface CardInfo {
  image_src: string,
  header: string,
  description: string,
  skills: string[],
  links?: LinkInfo[]
}

function openInNewTab(links: LinkInfo[]): void {
  links.map((link, _) => {
    window.open(link.url, "_blank")?.focus();
  })
}

export default function Card({ image_src, header, description, skills = [], links = [] }: CardInfo) {
  return (
    <div  className="p-3 max-w-96 rounded-lg overflow-hidden shadow-round-sm flex flex-col gap-4 transition duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="w-full h-48 overflow-hidden">
        <img className="rounded-lg w-full h-full" src={image_src} alt={"project image"} />
      </div>
      <p className="font-bold text-4xl">{header}</p>
      <div>
        <div className="flex flex-row gap-2 flex-wrap">
          {skills.map((skill, index) => (
            <Badge className="bg-darkpurple-200 hover:bg-darkpurple-250" key={index}>{skill}</Badge>
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