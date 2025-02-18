import { LegacyRef } from "react";
import BackgroundTop from "../components/Icons/bg-top";
import me_picture from "../images/me.png";
import { RefInfo } from "../types/reference";

export default function Main({ ref }: RefInfo) {

  return (
    <div ref={ref as LegacyRef<HTMLDivElement>} id="main" className="flex flex-col xl:flex-row-reverse gap-8 xl:gap-36 place-items-center relative pt-16 pb-32 xl:pt-44 xl:pb-96 px-5 xl:px-36">
      <BackgroundTop preserveAspectRatio="none" className="size-full absolute top-0 left-0 -z-10" />
      <img className="min-w-48 min-h-48 w-2/6 max-w-80 basis-4/6" src={me_picture.src} />
      <div className="flex flex-col gap-8 max-xl:place-items-center">
        <p className="font-bold text-4xl text-white xl:text-h1">
          Hellooooo;
        </p>
        <p className="max-xl:text-center text-white xl:text-xl">
          I'm Lazar Dobrota, a Software Engineer passionate about building scalable backend systems and designing custom frontend interfaces when needed. 
          I focus on clean architecture and performance optimization. 
          And while I enjoy coding in Java, I don't drink coffee.
        </p>
      </div>
    </div>
  )
}