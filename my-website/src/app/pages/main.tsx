import BackgroundTop from "../components/Icons/bg-top";
import my_logo from "../images/icons/my-logo.svg";
import me_picture from "../images/me.png";

export default function Main() {
  return (
    <div id="main" className="flex flex-col gap-6 place-items-center relative pt-16 pb-32 px-5">
      <BackgroundTop preserveAspectRatio="none" className="size-full absolute top-0 left-0 -z-10"/>
      <img className="size-20" src={my_logo.src}/>
      <img className="min-w-48 min-h-48 w-2/6 max-w-80" src={me_picture.src}/>
      <p className="font-bold text-4xl text-white">
        Hellooooo;
      </p>
      <p className="text-center text-white">
        My name is Lazar Dobrota, and I am a Software Developer with experience building a wide range of backend projects and designing custom front-end interfaces for them. I'm also passionate about gaming and game development.
      </p>
    </div>
  )
}