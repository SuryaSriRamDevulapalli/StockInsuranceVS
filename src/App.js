import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Insurance from './Components/Insurance';
import InsuranceList from './Components/InusranceList';


function App() {
  return (
    <div className="App">
     <h1>Welcome to Stock Insurance</h1>
     <BrowserRouter>
     <Routes>
          <Route path="/" element={<InsuranceList />} />
          <Route path="/create" element={<Insurance />} />
          <Route path="/edit/:id" element={<Insurance />} />         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
