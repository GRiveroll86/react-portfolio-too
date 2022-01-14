import Intro from "./components/intro/intro";
import About from './components/about/about';
import ProjectList from './components/projectList/projectList';

function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
