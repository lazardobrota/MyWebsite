import temp_pic from "../images/card-images/temp-pic.jpg";
import github_logo from "../images/icons/github-logo.svg";
import { LinkInfo } from "../types/card";
import Card from "../components/ui/Card/card";

export default function MyWork() {

  const github: LinkInfo = {url: "https://github.com/lazardobrota", logo_path: github_logo.src, alt: "Github"}

  return (
    <div className="flex flex-col gap-12 place-content-center">
      <div className="justify-items-center">
        <p className="font-bold text-4xl">My Work</p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-11 place-content-center">
        <Card
          image_src={temp_pic.src}
          header="Header"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          links={[github]}
          >
        </Card>
        <Card
          image_src={temp_pic.src}
          header="Header"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          links={[github]}
          >
        </Card>
        <Card
          image_src={temp_pic.src}
          header="Header"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          links={[github]}
          >
        </Card>
        <Card
          image_src={temp_pic.src}
          header="Header"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          links={[github]}
          >
        </Card>
      </div>
    </div>
  );
}
