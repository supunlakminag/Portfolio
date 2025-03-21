import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/navBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-orange-300 bg-[radial-gradient(ellipse_90%_90%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))] ">
      </div>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;
