import temp_pic from "../images/card-images/temp-pic.jpg";
import sah_pic from "../images/card-images/sah.png";
import cat_pic from "../images/card-images/cat.png";
import gym_pic from "../images/card-images/gym.png";
import connect4_pic from "../images/card-images/connect4.png";
import travel_pic from "../images/card-images/travel-guide.png";
import foodie_pic from "../images/card-images/foodie.png";
import bliztard2 from "../images/card-images/master-slave-replication.png";
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

  //Frontend
  const javascript = "JavaScript"
  const typescript = "TypeScript"
  // const tailwindcss = "Tailwindcss"
  const react = "React"

  //Database
  const sql = "SQL"

  //Language
  const python = "Python"
  const java = "Java"
  const haskell = "Haskell"
  const csharp = "C#"
  const kotlin = "Kotlin"

  //Additional skills
  const microservices = "Microservices"
  const websockets = "Web Sockets"
  const swing = "Swing"
  const aspNetCore = "ASP.NET Core "
  const docker = "Docker"
  const kubernetes = "Kubernetes"


  return (
    <div id="my-work" ref={ref as LegacyRef<HTMLDivElement>} className="flex flex-col gap-20 items-center px-5 lg:px-28 xl:px-36">
      <div className="justify-items-center">
        <h4 className="font-bold text-4xl lg:text-h1">My Work</h4>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-11 place-content-center">
        <Card
          image_src={bliztard2.src}
          header="Bliztard"
          description="Distributed system based on Master-Slave architecture with custom SSTable and custom LSM Tree."
          links={[{ url: "https://github.com/SpaceInvadersRAF/Bliztard", logo_path: github_logo.src, alt: "Github" }]}
          skills={[csharp, aspNetCore, docker, kubernetes]}
        >
        </Card>
        <Card
          image_src={sah_pic.src}
          header="Chess organization"
          description="Belgrade's chess organization database for their players and clubs. Admins can add, update or delete player and club informations. They also have easier time with searching and sorting data."
          links={[table_world_database]}
          skills={[react, typescript, python, sql]}
        >
        </Card>
        <Card
          image_src={cat_pic.src}
          header="Catapult"
          description="Mobile application about cats. You can  search your favory cats and find a lot of information about them. If you are up to it take a quiz and see how much you know about cats. you can publish your score to leaderboard."
          links={[{ url: "https://github.com/lazardobrota/Catapult", logo_path: github_logo.src, alt: "Github" }]}
          skills={[kotlin]}
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
          skills={[java, sql, microservices, react, typescript]}
        >
        </Card>
        <Card
          image_src={foodie_pic.src}
          header="Food Ordering"
          description="The client can log in and place an order for immediate delivery or schedule it for later. They can track the different statuses their order goes through before delivery and have the option to cancel it at first stage.
Admins can create new dishes, view orders from all users, identify invalid orders, create new accounts with specific permissions, and manage all existing accounts."
          links={[
            { url: "https://github.com/lazardobrota/FoodOrderingSystem", logo_path: github_logo.src, alt: "Github" }
          ]}
          skills={[java, sql, react, typescript, websockets]}
        >
        </Card>
        {/* <Card
          image_src={travel_pic.src}
          header="Travel Guide"
          description="Person can login and search locations. They can leave a review and read other peoples reviews. There are three roles, regular user, moderator and admin.  Admins and moderators can choose if they want to remove review but admins can also remove persons role or person from 
the website."
          links={[{ url: "https://github.com/lazardobrota/Travel_guide", logo_path: github_logo.src, alt: "Github" }]}
          skills={[java, react, typescript, shadcn, tailwindcss]}
        >
        </Card> */}
        {/* <Card
          image_src={connect4_pic.src}
          header="Connect 4"
          description="Two Players can play connect 4. They can import already existing board with some positions of chips or they can play from the beginning like a regular game. The whole game is implemented in Haskell programming languagle."
          links={[{ url: "https://github.com/lazardobrota/Connect4", logo_path: github_logo.src, alt: "Github" }]}
          skills={[haskell]}
        >
        </Card> */}
        <Card
          image_src={mind_map_pic.src}
          header="Gerumap"
          description="Create your  own Mind map using vertices and edges.  Add names in vertices, change color or boldness. You can import already created Mind maps, export your own as Mind map or image."
          links={[{ url: "https://github.com/lazardobrota/gerumap", logo_path: github_logo.src, alt: "Github" }]}
          skills={[java, swing]}
        >
        </Card>
      </div>
    </div>
  );
}
