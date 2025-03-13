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
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-classes" element={<ClassPage classes={SAMPLE_CLASSES} />} />
        <Route path="/my-classes/:classId/poses" element={<PosePage classes={SAMPLE_CLASSES} />} />
        {/* <Route path="/pose/:classId" element={<PosePage classes={SAMPLE_CLASSES} />} /> */}
        <Route path="/calendar" element={<Calendar classes={SAMPLE_CLASSES} />} />
        <Route path="/posesearch" element={<Search poses={SAMPLE_POSES} />} />
        {/* Catch-all route: redirect to the homepage when users try to input an incorrect link in the URL*/}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
