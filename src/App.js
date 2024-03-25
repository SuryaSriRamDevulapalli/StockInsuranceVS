import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Insurance from './Components/Insurance';
import InsuranceList from './Components/InusranceList';
import Quote from './Components/Quote';
import FindInsurances from './Components/FindInsurances';

import HomePage from './HomePage/HomePage';
import Login from './HomePage/Login';
import Registration from './HomePage/Registration';
import MainHomePage from './HomePage/MainHomePage';
import Profile from './HomePage/Profile';
import UsersList from './HomePage/Userslist';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
          {/* <Route path="/" element={<InsuranceList />} /> */}
          <Route path="/create" element={<Insurance />} />
          <Route path="/list" element={<InsuranceList />} />
          <Route path="/edit/:id" element={<Insurance />} />
        <Route path="/insurances" element={<FindInsurances />} />
        <Route path="/quote" element={<Quote />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/main" element={<MainHomePage />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/users" element={<UsersList />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
