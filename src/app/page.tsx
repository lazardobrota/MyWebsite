"use client"
import { useEffect, useRef, useState } from "react";
import Header from "./components/ui/header";
import HeaderVertical from "./components/ui/header-vertical";
import useWindowSize, { WindowSizeInfo } from "./hooks/use-window-size";
import AboutMe from "./pages/about-me";
import ContactMe from "./pages/contact-me";
import Footer from "./pages/footer";
import Main from "./pages/main";
import MyWork from "./pages/my-work";
import my_logo from "./images/icons/my-logo.svg";

interface Section {
  id: string,
  ref: React.RefObject<HTMLElement>;
}

export default function Home() {

  const [size, setSize] = useState<WindowSizeInfo>()
  useWindowSize({callback: setSize});  

  const [activeSection, setActiveSection] = useState<string>("main")
  useWindowSize({callback: setSize});

  const sections: Section[] = [
    {id: "main",       ref: useRef<HTMLElement>(null)},
    {id: "my-work",    ref: useRef<HTMLElement>(null)},
    {id: "about-me",   ref: useRef<HTMLElement>(null)},
    {id: "contact-me", ref: useRef<HTMLElement>(null)},
  ]

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: string = '';
      sections.forEach(({ id, ref }) => {
        const sectionTop: number = ref.current?.offsetTop || 0;
        const sectionHeight: number = ref.current?.offsetHeight || 0;
        // console.log( id + " " + window.scrollY + ">= " + ref.current?.offsetTop)
        if (window.scrollY + 200 >= sectionTop) {
          currentSection = id;
        }
      });
      // console.log(currentSection)
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <>
      {size?.width !== undefined && size?.width < 1280 && <Header></Header>}
      <div className="flex flex-col gap-32 shadow-inner-sm">
        {size?.width !== undefined && size?.width >= 1280 && <HeaderVertical active={activeSection}></HeaderVertical>}
        <Main ref={sections[0].ref}></Main>
        <MyWork ref={sections[1].ref}></MyWork>
        <AboutMe ref={sections[2].ref}></AboutMe>
        <ContactMe ref={sections[3].ref}></ContactMe>
        <Footer></Footer>
      </div>
    </>
  );
}
