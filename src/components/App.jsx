// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter here
import { NavBar } from './NavBar';
import HomePage from './HomePage';
import ClassPage from './ClassPage';
import PosePage from './PosePage';
import SAMPLE_POSES from '../data/poses.json'

function App(props) {

  const poses = SAMPLE_POSES;

  return (
    <div>
      <NavBar /> {/* Always appears on top */}
      <div style={{ paddingTop: '60px' }}> {/* Space for the fixed NavBar */}
        <Routes>
          {/* Default route for HomePage */}
          <Route path="/" element={<HomePage />} /> {/* This will be the first page */}
          <Route path="/my-classes" element={<ClassPage />} />
          <Route path="/pose" element={<PosePage poses={poses} />} />
          {/* You can add more routes here */}
        </Routes>
      </div>
    </div>
  )
}

export default App
