import temp_pic from "../images/card-images/temp-pic.jpg";
import github_logo from "../images/icons/github-logo.svg";
import { LinkInfo } from "../types/card";
import Card from "../components/ui/Card/card";
import BackgroundMiddle from "../components/Icons/bg-middle";

export default function AboutMe() {

  return (
    <div className="flex flex-col gap-20 place-content-center py-32 relative p-5">
      <BackgroundMiddle preserveAspectRatio="none" className="size-full top-0 left-0 absolute -z-10"/>
      <div className="justify-items-center">
        <p className="font-bold text-4xl text-white">About Me</p>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <p className="font-bold text-3xl text-white">Engineering</p>
        <div >
          <p className="text-xl text-white">I am building application with Java in the backend following architectures. I have used Microservices, Spring, ...</p>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <p className="font-bold text-3xl text-white">GameDev</p>
        <p className="text-xl text-white">I love creating amazing games using Unity Engine. I have created many really simple games and now I am working a actual game for publishing.</p>
      </div>
    </div>
  );
}
