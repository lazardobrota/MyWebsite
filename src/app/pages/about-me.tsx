import temp_pic from "../images/card-images/temp-pic.jpg";
import github_logo from "../images/icons/github-logo.svg";
import { LinkInfo } from "../types/card";
import Card from "../components/ui/Card/card";
import BackgroundMiddle from "../components/Icons/bg-middle";
import { RefInfo } from "../types/reference";
import { LegacyRef } from "react";

export default function AboutMe({ref}: RefInfo) {

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} id="about-me" className="flex flex-col gap-20 lg:gap-28 items-center py-32 lg:py-44 relative p-5 lg:px-36">
      <BackgroundMiddle preserveAspectRatio="none" className="size-full top-0 left-0 absolute -z-10" />
      <div className="justify-items-center">
        <h4 className="font-bold text-4xl lg:text-h1 text-white">About Me</h4>
      </div>
      <div>
        <div className="flex flex-col gap-8 max-lg:items-center">
          <p className="font-bold text-3xl lg:text-h2 text-white">Engineering</p>
          <div className="lg:w-1/2">
            <p className="text-xl lg:text-p1 text-white">I am building application with Java in the backend following architectures. I have used Microservices, Spring, ...</p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse">
        <div className="flex flex-col gap-8 max-lg:items-center lg:w-1/2">
          <p className="font-bold text-3xl lg:text-h2 text-white lg:items-start">GameDev</p>
          <div>
            <p className="text-xl lg:text-p1 text-white">I love creating amazing games using Unity Engine. I have created many really simple games and now I am working a actual game for publishing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
