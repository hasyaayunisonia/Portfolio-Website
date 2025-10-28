import ProfileSection from "./section/ProfileSection";
import Navbar from "./components/Navbar";
import AboutSection from "./section/AboutSection";
import ProjectSection from "./section/ProjectSection";
import EmailSection from "./section/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./section/AchievementsSection";
import ExperiencesSection from "./section/ExperiencesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <ProfileSection />
        <AchievementsSection />
        <AboutSection />
        <ExperiencesSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
