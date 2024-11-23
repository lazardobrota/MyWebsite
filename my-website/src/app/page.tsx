"use client"
import { useState } from "react";
import Header from "./components/ui/header";
import HeaderVertical from "./components/ui/header-vertical";
import useWindowSize, { WindowSizeInfo } from "./hooks/use-window-size";
import AboutMe from "./pages/about-me";
import ContactMe from "./pages/contact-me";
import Footer from "./pages/footer";
import Main from "./pages/main";
import MyWork from "./pages/my-work";
import my_logo from "./images/icons/my-logo.svg";

export default function Home() {

  const [size, setSize] = useState<WindowSizeInfo>()
  useWindowSize({callback: setSize});  

  return (
    <>
      {size?.width !== undefined && size?.width < 1280 && <Header></Header>}
      <div className="flex flex-col gap-32 shadow-inner-sm">
        {size?.width !== undefined && size?.width >= 1280 && <HeaderVertical></HeaderVertical>}
        <Main></Main>
        <MyWork></MyWork>
        <AboutMe></AboutMe>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
    </>
  );
}
