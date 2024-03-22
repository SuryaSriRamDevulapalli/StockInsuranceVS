import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Insurance from './Components/Insurance';
import InsuranceList from './Components/InusranceList';
import Quote from './Components/Quote';
import FindInsurances from './Components/FindInsurances';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
          <Route path="/" element={<InsuranceList />} />
          <Route path="/create" element={<Insurance />} />
          <Route path="/" element={<InsuranceList />} />
        <Route path="/insurances" element={<FindInsurances />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
