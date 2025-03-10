// import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'; // Use BrowserRouter here
import { NavBar } from './NavBar';
import HomePage from './HomePage';
import ClassPage from './ClassPage';
import PosePage from './PosePage';
import SAMPLE_POSES from '../data/poses.json';
import SAMPLE_CLASSES from '../data/classes.json';
import Calendar from './Calendar';
import Search from './Search';
import Footer from './Footer';

function App(props) {

  const poses = SAMPLE_POSES;

  return (
    <>
      <NavBar /> {/* Always appears on top */}
      {/* <div style={{ paddingTop: '60px' }}> Space for the fixed NavBar */}
      <Routes>
        {/* Default route for HomePage */}
        <Route path="/" element={<HomePage />} /> {/* This will be the first page */}
        <Route path="/my-classes" element={<ClassPage classes={SAMPLE_CLASSES} />} />
        <Route path="/pose" element={<PosePage poses={poses} />} />
        {/* You can add more routes here */}
        <Route path="/calendar" element={<Calendar classes={SAMPLE_CLASSES} />} />
        <Route path="/posesearch" element={<Search poses={SAMPLE_POSES} />} />
        {/* Catch-all route: redirect to the homepage when users try to input an incorrect link in the URL*/}
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
      {/* </div> */}
      <Footer />
    </>
  )
}

export default App
