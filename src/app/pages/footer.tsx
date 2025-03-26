import BackgroundBottom from "../components/Icons/bg-bottom";
import github_logo from "../images/icons/github-logo-white.svg";
import linkedin_logo from "../images/icons/linkedin-logo-white.svg";

export default function Footer() {

  return (
    <div className="flex flex-row justify-center relative">
      <BackgroundBottom preserveAspectRatio="none" className="left-0 top-0 size-full absolute -z-10" />
      <div className="flex flex-row-reverse gap-4 pt-20 pb-10 w-full lg:max-w-custom px-5 lg:px-36">
        <a href="https://github.com/lazardobrota" target="_blank">
          <img src={github_logo.src} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/lazar-dobrota-42870826a/" target="_blank">
          <img src={linkedin_logo.src} alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}