import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'; // Use BrowserRouter here
import { NavBar } from './NavBar';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';
import { onAuthStateChanged, getAuth, signOut } from 'firebase/auth';

import HomePage from './HomePage';
import ClassPage from './ClassPage';
import PosePage from './PosePage';
import SAMPLE_POSES from '../data/poses.json';
import SAMPLE_CLASSES from '../data/classes.json';
import Calendar from './Calendar';
import Footer from './Footer';
import LogIn from './LogIn';

function App(props) {
  const [currentUser, setCurrentUser] = useState();
  const [userClasses, setUserClasses] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();

    const fetchUserClasses = (userId) => {
      const classesRef = ref(db, 'users/' + userId + '/classes');
      onValue(classesRef, (snapshot) => {
        const dataObj = snapshot.val();
        if (dataObj) {
          const keyArray = Object.keys(dataObj);
          const classesArr = keyArray.map((keyString) => {
            const transformed = dataObj[keyString];
            return transformed;
          })
          setUserClasses(classesArr);
        } else {
          setUserClasses([]);
          return;
        }
      })
    };

    onAuthStateChanged(auth, (firebaseUserObj) => {
      setCurrentUser(firebaseUserObj);
      if (firebaseUserObj) {
        fetchUserClasses(firebaseUserObj.uid);
      } else {
        setUserClasses([]);
      }
    });
  }, []);
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage userStatus={currentUser} />} />
        <Route path="/my-classes" element={<ClassPage classes={ userClasses } user={ currentUser } />} />
        <Route path="/my-classes/:classId/poses" element={<PosePage classes={ userClasses } />} />
        {/* <Route path="/pose/:classId" element={<PosePage classes={SAMPLE_CLASSES} />} /> */}
        <Route path="/calendar" element={<Calendar classes={ userClasses } />} />
        {/* <Route path="/posesearch" element={<Search poses={SAMPLE_POSES} />} /> */}
        <Route path="/login" element={<LogIn/>}/>

        {/* Catch-all route: redirect to the homepage when users try to input an incorrect link in the URL*/}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
