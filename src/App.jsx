import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/blue">Blue</Link></li>
            <li><Link to="/red">Red</Link></li>
          </ul>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/home" element={<h1>Blue</h1>} /> 
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

