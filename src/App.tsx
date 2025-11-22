import FooterLayout from "./components/layouts/footer";
import HeaderLayout from "./components/layouts/header";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { LanguageProvider } from "./i18n";
import HomePage from "./components/layouts/home";
import { TeamSection } from "./components/layouts/team";
import MembersOfTheMonth from "./components/layouts/member_months";
import EventsWorkshopsSection from "./components/layouts/events_workshops_section";
import InstallPrompt from "./components/layouts/InstallPrompt";
import TestimonialsSection from "./components/layouts/TestimonialsSection";
import AwardsSection from "./components/layouts/AwardsSection";
import ProjectsSection from "./components/layouts/ProjectsSection";
import SocialMediaSection from "./components/layouts/SocialMedia";
import simpleNotificationManager from '@/services/simpleNotificationManager';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const open = localStorage.getItem("test");
    if (!open) {
      {
        setTimeout(() => {
          simpleNotificationManager.sendEventRegistrationNotification("Test Workshop");
        }, 2000);
        localStorage.setItem("test", "true");
      }
    }
  }, []);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <div className="min-h-screen  bg-linear-to-br from-blue-50 via-white to-orange-50 dark:from-blue-950/30 dark:via-gray-900 dark:to-orange-950/30 flex flex-col transition-colors duration-300">
          <InstallPrompt />
          <HeaderLayout />
          <HomePage />
          <TeamSection />
          <EventsWorkshopsSection />
          <AwardsSection />
          <ProjectsSection />
          <MembersOfTheMonth />
          <TestimonialsSection />
          <SocialMediaSection />
          <FooterLayout />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;