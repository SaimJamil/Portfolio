import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Hobbies from './components/Hobbies'

function App() {
  return (
    <>
    <Particles
      className="partical-canvas"
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#ffbf00"
            }
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Education/>
    <Experience/>
    <Portfolio/>
    <Hobbies/>
    <Contacts/>
    <Footer/>
    </>
  );
}

export default App;
