// PÁGINA · Compone las vistas dentro del controlador de estado (lightbox).
import { LightboxProvider } from "@/controllers/LightboxProvider";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Vision } from "@/components/sections/Vision";
import { Automation } from "@/components/sections/Automation";
import { Dashboards } from "@/components/sections/Dashboards";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <LightboxProvider>
      <ScrollProgress />
      <Navbar />
      <div className="relative flex-1">
        <Hero />
        <Services />
        <Vision />
        <Automation />
        <Dashboards />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </LightboxProvider>
  );
}
