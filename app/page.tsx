import About from "./components/About";
import ContactDetails from "./components/ContactDetails";
import Educations from "./components/Educations";
import FurtherEducation from "./components/FurtherEducation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import NavBar from "./components/layouts/NavBar";
import WorkExperience from "./components/WorkExperience";
import AuroraHero from "./AuroraHero";
import data from "./data.json";
import Page from "./components/layouts/Page";
import { cn } from "./lib/utils";
import { Hobbies } from "./components/Hobbies";
import Commentaires from "./components/Commentaires";

export default function Home() {
  return (
    <div className="">
      <AuroraHero>
        <div className="py-14 bg-transparent flex flex-col gap-3 justify-center items-center relative z-10">
          <NavBar />
          <Page variant="A4" className="flex flex-col">
            <div className="flex-none flex flex-row justify-center items-center relative">
              <Header info={data.personalInfo} />
            </div>
            <main className="grow flex flex-row justify-stretch items-start w-full">
              <div
                id="left-side"
                className="flex-grow w-[70mm] h-full p-6 flex flex-col justify-around"
              >
                <ContactDetails
                  contactDetails={data.personalInfo.contactDetails}
                />
                <Skills skills={data.skills} projects={data.projects} />
                <Educations educations={data.educations.reverse()} />
              </div>
              <div className="w-full h-full border-l-2 border-gold-500 p-4">
                <About about={data.personalInfo.about} />
                <WorkExperience experiences={data.experiences} />
                <Hobbies hobbies={data.hobbies} />
              </div>
            </main>
          </Page>
          <Page variant="A4">
            <Projects projects={data.projects.reverse()} />
          </Page>
        </div>
        <div>
          <Commentaires />
        </div>
      </AuroraHero>
    </div>
  );
}
