import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import NavigationBar from './components/Navigation';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WorkingOnSection from './components/WorkingOnSection';
import Interests from './components/InterestSection';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="relative">
        <NavigationBar />
        <main>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <WorkingOnSection />
          <Interests />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;