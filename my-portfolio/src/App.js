import Header from "./components/header/header";
import About from './components/about/about';
import ProjectList from './components/projectList/projectList';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
