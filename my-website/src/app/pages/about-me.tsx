import temp_pic from "../images/card-images/temp-pic.jpg";
import github_logo from "../images/icons/github-logo.svg";
import { LinkInfo } from "../types/card";
import Card from "../components/ui/Card/card";

export default function AboutMe() {

  return (
    <div className="flex flex-col gap-20 place-content-center px-5">
      <div className="justify-items-center">
        <p className="font-bold text-4xl">About Me</p>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <p className="font-bold text-3xl">Engineering</p>
        <div >
          <p className="text-xl">I am building application with Java in the backend following architectures. I have used Microservices, Spring, ...</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <p className="font-bold text-3xl">GameDev</p>
        <p className="text-xl">I love creating amazing games using Unity Engine. I have created many really simple games and now I am working a actual game for publishing.</p>
      </div>
    </div>
  );
}
