import About from "./components/About";
import ContactDetails from "./components/ContactDetails";
import Education from "./components/Education";
import FurtherEducation from "./components/FurtherEducation";
import Header from "./components/Header";
import Projects from "./components/Project";
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
                <Header />
              </div>
              <main className="flex flex-row justify-start items-start w-full">
                <div className="w-1/2 h-full p-10">
                  <ContactDetails contactDetails={data.personalInfo.contactDetails} />
                  <Skills skills={data.skills} />
                  <FurtherEducation />
                </div>
                <div className="w-full border-l-2 border-gray-400">
                  <About about={data.personalInfo.about} />
                  <WorkExperience experiences={data.experiences} />
                  <Education educations={data.educations} />
                </div>
              </main>
            </div>
          </Layout>
          <Layout>
            <Projects />
          </Layout>
        </div>
      </AuroraHero>
    </div>
  );
}
