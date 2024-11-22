import temp_pic from "../images/card-images/temp-pic.jpg";
import github_logo from "../images/icons/github-logo.svg";
import { LinkInfo } from "../types/card";
import Card from "../components/ui/Card/card";
import BackgroundMiddle from "../components/Icons/bg-middle";

export default function AboutMe() {

  return (
    <div id="about-me" className="flex flex-col gap-20 xl:gap-28 place-content-center py-32 xl:py-44 relative p-5 xl:px-36">
      <BackgroundMiddle preserveAspectRatio="none" className="size-full top-0 left-0 absolute -z-10" />
      <div className="justify-items-center">
        <h4 className="font-bold text-4xl xl:text-h1 text-white">About Me</h4>
      </div>
      <div>
        <div className="flex flex-col gap-8 max-xl:items-center">
          <p className="font-bold text-3xl xl:text-h2 text-white">Engineering</p>
          <div className="xl:w-1/2">
            <p className="text-xl xl:text-p1 text-white">I am building application with Java in the backend following architectures. I have used Microservices, Spring, ...</p>
          </div>
        </div>
      </div>
      <div className="xl:justify-items-end">
        <div className="flex flex-col gap-8 max-xl:items-center xl:w-1/2">
          <p className="font-bold text-3xl xl:text-h2 text-white xl:items-start">GameDev</p>
          <div>
            <p className="text-xl xl:text-p1 text-white">I love creating amazing games using Unity Engine. I have created many really simple games and now I am working a actual game for publishing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
