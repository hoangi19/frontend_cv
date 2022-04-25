import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Homepage from './components/Homepage';

function App()
{
  return(
    <div className="wrapper">
      <BrowserRouter>      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);