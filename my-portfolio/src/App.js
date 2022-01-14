import Intro from "./components/intro/intro";
import About from './components/about/about';
import ProjectList from './components/projectList/projectList';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
