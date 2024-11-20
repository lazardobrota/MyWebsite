import AboutMe from "./pages/about-me";
import Main from "./pages/main";
import MyWork from "./pages/my-work";

export default function Home() {

  return (
    <>
    <div className="flex flex-col gap-32 shadow-inner-sm"> {/* px-36 za pc*/}
      <Main></Main>
      <MyWork></MyWork>
      <AboutMe></AboutMe>
    </div>
    </>
  );
}
