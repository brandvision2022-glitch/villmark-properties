import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { JointVentureSection } from './components/JointVentureSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { FloorPlanModal } from './components/FloorPlanModal';
import { ImageManagerModal } from './components/ImageManagerModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Project, ImageLinksConfig } from './types';
import { DEFAULT_IMAGES, PROJECTS_DATA } from './data/projects';

const STORAGE_KEY = 'villamark_custom_images';

export default function App() {
  const [images, setImages] = useState<ImageLinksConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return DEFAULT_IMAGES;
  });

  const [isFloorPlanModalOpen, setIsFloorPlanModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(PROJECTS_DATA[0]);
  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);

  const handleSaveImages = (newImages: ImageLinksConfig) => {
    setImages(newImages);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newImages));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
  };

  const handleOpenFloorPlan = (project: Project) => {
    setSelectedProject(project);
    setIsFloorPlanModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B111E] text-slate-100 flex flex-col font-sans selection:bg-[#C59B27] selection:text-slate-950">
      {/* Navigation */}
      <Navbar onOpenImageManager={() => setIsImageManagerOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero
          images={images}
          onOpenImageManager={() => setIsImageManagerOpen(true)}
        />

        <ProjectsSection
          images={images}
          onSelectProjectForFloorPlan={handleOpenFloorPlan}
          onOpenImageManager={() => setIsImageManagerOpen(true)}
        />

        <JointVentureSection />

        <AmenitiesSection />

        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 3-Bedroom Floor Plan Pop-up Modal */}
      <FloorPlanModal
        isOpen={isFloorPlanModalOpen}
        onClose={() => setIsFloorPlanModalOpen(false)}
        project={selectedProject}
      />

      {/* Canva Image Link Manager Modal */}
      <ImageManagerModal
        isOpen={isImageManagerOpen}
        onClose={() => setIsImageManagerOpen(false)}
        images={images}
        onSave={handleSaveImages}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
