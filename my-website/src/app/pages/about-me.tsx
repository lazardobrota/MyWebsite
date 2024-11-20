import temp_pic from "../images/card-images/temp-pic.jpg";
import github_logo from "../images/icons/github-logo.svg";
import { LinkInfo } from "../types/card";
import Card from "../components/ui/Card/card";

export default function AboutMe() {

  const github: LinkInfo = {url: "https://github.com/lazardobrota", logo_path: github_logo.src, alt: "Github"}

  return (
    <div className="flex flex-col gap-12 place-content-center">
      <div className="justify-items-center">
        <p className="font-bold text-4xl">About Me</p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-11 place-content-center">
        
      </div>
    </div>
  );
}
