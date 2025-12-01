import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './webpages/Projects';

//import Home from './webpages/Home';

//import About from './webpages/About';
//import Contact from './webpages/Contact';
//import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          
          <Route path="/webpages/projects" element={<Projects />} />
      
        </Routes>

      </div>
    </Router>

  )
}
export default App;
