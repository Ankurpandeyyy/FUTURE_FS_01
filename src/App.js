// import logo from './logo.svg';
import './App.css';
import MyNavbar from './componenets/navbar';
import Banner from './componenets/Banner';
import Skills from './componenets/Skills';
import Project from './componenets/Project';
import {Contact} from './componenets/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
