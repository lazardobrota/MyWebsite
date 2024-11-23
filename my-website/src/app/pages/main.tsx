import { useState } from "react";
import BackgroundTop from "../components/Icons/bg-top";
import my_logo from "../images/icons/my-logo.svg";
import me_picture from "../images/me.png";
import useWindowSize, { WindowSizeInfo } from "../hooks/use-window-size";

export default function Main() {
  
  const [size, setSize] = useState<WindowSizeInfo>()
  useWindowSize({callback: setSize});  

  return (
    <div id="main" className="flex flex-col xl:flex-row-reverse gap-8 xl:gap-36 place-items-center relative pt-16 pb-32 xl:pt-44 xl:pb-96 px-5 xl:px-36">
      <BackgroundTop preserveAspectRatio="none" className="size-full absolute top-0 left-0 -z-10"/>
      <img className="size-20 xl:absolute xl:top-7 xl:left-7" src={my_logo.src}/>
      <img className="min-w-48 min-h-48 w-2/6 max-w-80 basis-4/6 " src={me_picture.src}/>
      <div className="flex flex-col gap-8 max-xl:place-items-center">
        <p className="font-bold text-4xl text-white xl:text-h1">
          Hellooooo;
        </p>
        <p className="max-xl:text-center text-white xl:text-xl">
          My name is Lazar Dobrota, and I am a Software Developer with experience building a wide range of backend projects and designing custom front-end interfaces for them. I'm also passionate about gaming and game development.
        </p>
      </div>
    </div>
  )
}