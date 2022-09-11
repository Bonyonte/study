import React from 'react';
import './App.css';
import './Teacher.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Students from './components/Students';
import Teachers from './components/Teachers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
