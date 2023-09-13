import NavBar from "./Components/NavBar/NavBar";
// import Contacts from "./Components/Contacts/Contacts";
import Hero from "./Components/Hero/Hero";
import Experties from "./Components/Experties/Experties"
import css from './styles/App.module.scss'
import Projects from "./Components/projects/Projects";
import Education from "./Components/Education/Education";
import Cnt from './Components/Contacts/Cnt'
import Demo from "./Components/Demo/Demo";


function App() {
  return (
    <div className={`${css.container}`}>
    
      <NavBar />
      <Hero />
      <Experties />
      <Projects />
      <Education /> 
      <Cnt />
      <Demo/>

    </div>

  );
}

export default App;
