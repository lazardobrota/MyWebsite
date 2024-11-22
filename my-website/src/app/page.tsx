import Header from "./components/ui/header";
import HeaderVertical from "./components/ui/header-vertical";
import AboutMe from "./pages/about-me";
import ContactMe from "./pages/contact-me";
import Footer from "./pages/footer";
import Main from "./pages/main";
import MyWork from "./pages/my-work";

export default function Home() {

  return (
    <>
      {/* <Header></Header> */}
      <div className="flex flex-col gap-32 shadow-inner-sm">
        <HeaderVertical></HeaderVertical>
        <Main></Main>
        <MyWork></MyWork>
        <AboutMe></AboutMe>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
    </>
  );
}
