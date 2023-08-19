import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import Services from './Services';
import Projects from './Projects';
import SkillSets from './SkillSets';
import AboutMe from './AboutMe';
import Certificates from './Certificates';
import Footer from './Footer';
import ContactMeModal from './ContactMeModal';

function App() {
  return (
  <div>
    <Nav />
    <Intro />
    <ContactMeModal />
    <Services />
    <Projects />
    <SkillSets />
    <AboutMe />
    <Certificates />
    <Footer />
  </div>
  );
}

export default App;
