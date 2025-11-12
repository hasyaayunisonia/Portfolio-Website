import ProfileSection from "./section/ProfileSection";
import Navbar from "./components/Navbar";
import AboutSection from "./section/AboutSection";
import ProjectsSection from "./section/ProjectsSection";
import EmailSection from "./section/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./section/AchievementsSection";
import ExperiencesSection from "./section/ExperiencesSection";
import TechnologiesSection from "./section/TechnologiesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <ProfileSection />
        <TechnologiesSection />
        <AchievementsSection />
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
