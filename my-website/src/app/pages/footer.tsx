import BackgroundBottom from "../components/Icons/bg-bottom";
import github_logo from "../images/icons/github-logo-white.svg";
import linkedin_logo from "../images/icons/linkedin-logo-white.svg";

export default function Footer() {
  return (
    <div className="flex flex-row-reverse gap-4">
      <BackgroundBottom preserveAspectRatio="none" className="size-full top-0 left-0 absolute -z-10"/>
      <img src={github_logo.src} alt="Github"/>
      <img src={linkedin_logo.src} alt="LinkedIn"/>
    </div>
  )
}