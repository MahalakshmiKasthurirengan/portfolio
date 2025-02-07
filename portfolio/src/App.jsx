import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar appname="Mahalakshmi K" />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
