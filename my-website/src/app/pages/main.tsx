import my_logo from "../images/icons/my-logo.svg";
import me_picture from "../images/me.png";

export default function Main() {
  return (
    <div className="flex flex-col gap-6 place-items-center">
      <img className="size-20" src={my_logo.src}/>
      <img className="size-48" src={me_picture.src}/>
      <p className="font-bold text-4xl">
        Hellooooo;
      </p>
      <p className="text-center">
        My name is Lazar Dobrota, and I am a Software Developer with experience building a wide range of backend projects and designing custom front-end interfaces for them. I'm also passionate about gaming and game development.
      </p>
    </div>
  )
}