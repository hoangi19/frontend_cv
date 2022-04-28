import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Homepage from './components/Homepage';

function App()
{
  return(
    <div className="wrapper">
      <Router >   
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router >
      </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);