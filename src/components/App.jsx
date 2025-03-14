// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'; // Use BrowserRouter here
import { NavBar } from './NavBar';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

import HomePage from './HomePage';
import ClassPage from './ClassPage';
import PosePage from './PosePage';
import SAMPLE_POSES from '../data/poses.json';
import SAMPLE_CLASSES from '../data/classes.json';
import Calendar from './Calendar';
import Search from './Search';
import Footer from './Footer';
import LogIn from './LogIn';

function App(props) {
  const [currentUser, setCurrentUser] = useState();
  const [userClasses, setUserClasses] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    console.log("auth: " + auth);
    const db = getDatabase();

    const fetchUserClasses = (userId) => {
      const classesRef = ref(db, 'users/' + userId + '/classes');
      onValue(classesRef, (snapshot) => {
        const dataObj = snapshot.val();

        const keyArray = Object.keys(dataObj);
        const classesArr = keyArray.map((keyString) => {
          const transformed = dataObj[keyString];
          return transformed;
        })

        setUserClasses(classesArr);
      })
    };

    onAuthStateChanged(auth, (firebaseUserObj) => {
      console.log("auth state changed");
      setCurrentUser(firebaseUserObj);
      if (firebaseUserObj) {
        setCurrentUser(firebaseUserObj);
        fetchUserClasses(firebaseUserObj.uid);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-classes" element={<ClassPage classes={ userClasses } user={currentUser} />} />
        <Route path="/my-classes/:classId/poses" element={<PosePage classes={ SAMPLE_POSES } />} />
        {/* <Route path="/pose/:classId" element={<PosePage classes={SAMPLE_CLASSES} />} /> */}
        <Route path="/calendar" element={<Calendar classes={ userClasses } />} />
        <Route path="/posesearch" element={<Search poses={SAMPLE_POSES} />} />
        <Route path="/login" element={<LogIn/>}/>

        {/* Catch-all route: redirect to the homepage when users try to input an incorrect link in the URL*/}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
