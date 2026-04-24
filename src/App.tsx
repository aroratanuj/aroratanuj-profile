import SEO from './components/SEO';
import ATSOptimizer from './components/ATSOptimizer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CredibilityStrip from './components/CredibilityStrip';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <ATSOptimizer />
      <Navbar />
      <Hero />
      <CredibilityStrip />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
