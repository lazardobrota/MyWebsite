import temp_pic from "../images/card-images/temp-pic.jpg";
import sah_pic from "../images/card-images/sah.png";
import cat_pic from "../images/card-images/cat.png";
import gym_pic from "../images/card-images/gym.png";
import connect4_pic from "../images/card-images/connect4.png";
import travel_pic from "../images/card-images/travel-guide.png";
import mind_map_pic from "../images/card-images/mind-map.png";
import github_logo from "../images/icons/github-logo.svg";
import table_world_logo from "../images/icons/table-world.svg";
import { LinkInfo } from "../types/card";
import Card from "../components/ui/Card/card";
import { RefInfo } from "../types/reference";
import { LegacyRef } from "react";

export default function MyWork({ ref }: RefInfo) {

  const github: LinkInfo = { url: "https://github.com/lazardobrota", logo_path: github_logo.src, alt: "Github" }
  const table_world_database: LinkInfo = { url: "https://baza.beochess.rs/", logo_path: table_world_logo.src, alt: "Table world" }

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
          image_src={cat_pic.src}
          header="Catapult"
          description="Mobile application about cats. You can  search your favory cats and find a lot of information about them. If you are up to it take a quiz and see how much you know about cats. you can publish your score to leaderboard."
          links={[{ url: "https://github.com/lazardobrota/Catapult", logo_path: github_logo.src, alt: "Github" }]}
        >
        </Card>
        <Card
          image_src={gym_pic.src}
          header="Gym Application"
          description="Web application where people can appoint their training by seeing at what times what parts of gym are occupied. This is for personal and induviduals trainings."
          links={[
            { url: "https://github.com/StudentRAF/GymMicroservices", logo_path: github_logo.src, alt: "Github" },
            { url: "https://github.com/StudentRAF/GymApplication", logo_path: github_logo.src, alt: "Github" }
          ]}
        >
        </Card>
        <Card
          image_src={travel_pic.src}
          header="Travel Guide"
          description="Person can login and search locations. They can leave a review and read other peoples reviews. There are three roles, regular user, moderator and admin.  Admins and moderators can choose if they want to remove review but admins can also remove persons role or person from 
the website."
          links={[{ url: "https://github.com/lazardobrota/Travel_guide", logo_path: github_logo.src, alt: "Github" }]}
        >
        </Card>
        <Card
          image_src={connect4_pic.src}
          header="Connect 4"
          description="Two Players can play connect 4. They can import already existing board with some positions of chips or they can play from the beginning like a regular game. The whole game is implemented in Haskell programming languagle."
          links={[{ url: "https://github.com/lazardobrota/Connect4", logo_path: github_logo.src, alt: "Github" }]}
        >
        </Card>
        <Card
          image_src={mind_map_pic.src}
          header="Gerumap"
          description="Create your  own Mind map using vertices and edges.  Add names in vertices, change color or boldness. You can import already created Mind maps, export your own as Mind map or image."
          links={[{ url: "https://github.com/lazardobrota/gerumap", logo_path: github_logo.src, alt: "Github" }]}
        >
        </Card>
      </div>
    </div>
  );
}
