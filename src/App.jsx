import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";


function App() {
  return (
    <div className="relative w-full text-gray-200 font-display min-h-screen selection:bg-primary/30">
      <Background />
      <div className="fixed inset-0 bg-background-dark/50 -z-5 pointer-events-none" />
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
