import temp_pic from "../images/card-images/temp-pic.jpg";
import sah_pic from "../images/card-images/sah.png";
import github_logo from "../images/icons/github-logo.svg";
import table_world_logo from "../images/icons/table-world.svg";
import { LinkInfo } from "../types/card";
import Card from "../components/ui/Card/card";
import { RefInfo } from "../types/reference";
import { LegacyRef } from "react";

export default function MyWork({ref}: RefInfo) {

  const github: LinkInfo = {url: "https://github.com/lazardobrota", logo_path: github_logo.src, alt: "Github"}
  const table_world_database: LinkInfo = {url: "https://baza.beochess.rs/", logo_path: table_world_logo.src, alt: "Table world"}

  return (
    <div id="my-work" ref={ref as LegacyRef<HTMLDivElement>} className="flex flex-col gap-20 place-content-center px-5 lg:px-28 xl:px-36">
      <div className="justify-items-center">
        <p className="font-bold text-4xl xl:text-h1">My Work</p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-11 place-content-center">
        <Card
          image_src={sah_pic.src}
          header="Chess organization"
          description="Belgrade's chess organization database for their players and clubs. Admins can add, update or delete player and club informations. They also have easier time with searching and sorting data."
          links={[table_world_database]}
          >
        </Card>
        <Card
          image_src={temp_pic.src}
          header="Catapult"
          description="Mobile application about cats. You can  search your favory cats and find a lot of information about them. If you are up to it take a quiz and see how much you know about cats. you can publish your score to leaderboard."
          links={[{url: "https://github.com/lazardobrota/Catapult", logo_path: github_logo.src, alt: "Github"}]}
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
