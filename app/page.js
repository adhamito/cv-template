import About from "./components/About";
import ContactDetails from "./components/ContactDetails";
import DownloadPDFButton from "./hook/DownloadPDFButton";
import Education from "./components/Education";
import FurtherEducation from "./components/FurtherEducation";
import Header from "./components/Header";
import Projects from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="p-4" id="pdf-content">
      <div className="flex flex-row justify-center items-center relative">
        <Header />
        <DownloadPDFButton />
      </div>
      <main className="flex flex-row justify-start items-start w-full">
        <div className=" w-1/2 h-full  p-10">
          <ContactDetails />
          <Skills />
          <FurtherEducation />
        </div>
        <div className="w-full border-l-2 border-gray-400 ">
          <About />
          <Projects />
          <Education />
        </div>
      </main>
    </div>
  );
}
