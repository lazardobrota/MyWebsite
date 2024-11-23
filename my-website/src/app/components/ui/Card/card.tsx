import { LinkInfo } from "@/app/types/card"

interface CardInfo {
  image_src: string,
  header: string,
  description: string,
  links?: LinkInfo[]
}

export default function Card({ image_src, header, description, links = [] }: CardInfo) {
  return (
    <div className="p-3 max-w-96 rounded-lg overflow-hidden shadow-round-sm flex flex-col gap-8">
      <div className="w-full h-48 overflow-hidden">
        <img className="rounded-lg w-full h-full" src={image_src} alt={"project image"} />
      </div>
      <p className="font-bold text-4xl">{header}</p>
      <div className="h-36">
        <p>
          {description}
        </p>
      </div>
      <div className="flex flex-row">
        {links.map((link, index) => (
          <a key={index} className="w-1/6" href={link.url}>
            <img key={index} src={link.logo_path} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  )
}