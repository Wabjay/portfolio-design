
import './App.css'
import AnimatedCursor from "react-animated-cursor"
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import Works from './pages/Works';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Project from './pages/Project';

function App() {

  return (
  <>
 <AnimatedCursor  innerSize={8}
 
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'rgb(165,76,189)'
  }}
  outerStyle={{
    border: '3px solid rgb(71,129,84)',
    mixBlendMode: 'exclusion'
  }}/>
    <div className='container w-fit p-3'>
      <div className='w-full rounded'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/project/:id" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
       </div>
    </div>
    </>
  )
}

export default App
