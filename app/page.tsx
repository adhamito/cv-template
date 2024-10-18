import About from "./components/About";
import ContactDetails from "./components/ContactDetails";
import Educations from "./components/Educations";
import FurtherEducation from "./components/FurtherEducation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import WorkExperience from "./components/WorkExperience";
import Layout from "./components/layout";
import AuroraHero from "./AuroraHero";
import data from "./components/data.json";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AuroraHero>
        <div className="py-14 bg-transparent flex flex-col gap-3 justify-center items-center relative z-10">
          <NavBar />
          <Layout>
            <div
              className="mt-8 shadow-sm rounded-sm items-center"
              id="pdf-content"
            >
              <div className="flex flex-row justify-center items-center relative">
                <Header info={data.personalInfo} />
              </div>
              <main className="flex flex-row justify-start items-start w-full">
                <div className="w-1/2 h-full p-10">
                  <ContactDetails contactDetails={data.personalInfo.contactDetails} />
                  <Skills skills={data.skills} />
                  <FurtherEducation furtherEducation={data.furtherEducation} />
                </div>
                <div className="w-full border-l-2 border-gray-400">
                  <About about={data.personalInfo.about} />
                  <WorkExperience experiences={data.experiences} />
                  <Educations educations={data.educations} />
                </div>
              </main>
            </div>
          </Layout>
          <Layout>
            <Projects projects={data.projects} />
          </Layout>
        </div>
      </AuroraHero>
    </div>
  );
}
