import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/library" element={<News />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
