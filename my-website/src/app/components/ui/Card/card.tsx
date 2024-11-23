import { LinkInfo } from "@/app/types/card"

interface CardInfo {
  image_src: string,
  header: string,
  description: string,
  links?: LinkInfo[]
}

export default function Card({image_src, header, description, links = []}: CardInfo) {
  return (
    <div className="p-3 max-w-96 rounded-lg overflow-hidden shadow-round-sm flex flex-col gap-8">
      <img className="rounded-lg max-h-48 object-cover" src={image_src} alt={"project image"}/>
      <p className="font-bold text-4xl">{header}</p>
      <p>
        {description}
      </p>
      <div className="flex flex-row gap-4">
        {links.map((link, index) => (
          <a key={index} className="w-1/6" href={link.url}>
            <img key={index} src={link.logo_path} alt={link.alt}/>
          </a>
        ))}
      </div>
    </div>
  )
}