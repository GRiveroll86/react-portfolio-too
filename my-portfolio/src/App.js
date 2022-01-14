import Header from "./components/header/header";
import About from './components/about/about';
import ProjectList from './components/projectList/projectList';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
