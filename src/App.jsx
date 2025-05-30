import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Internship from './components/Internship';
import Education from './components/Education';
import Objective from './components/Objective';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <About />
        <Projects />
        <Certificates /> <br />
        <Education /> <br />
        <Internship /> <br />
        <Objective /> <br /> 
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
