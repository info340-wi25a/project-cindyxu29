// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'; // Use BrowserRouter here
import { NavBar } from './NavBar';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

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
  const [userClasses, setUserClasses] = useState();
  const userId = "01"; // testing

  const testUser = {
    userid: "01",
    classes: {
      class1: {
        title: "Gentle Yoga",
        duration: 30,
        location: "UW HUB",
        date: "03/10/2025",
        time: "2:00pm",
        notes: "Beginning lesson for UW students",
        poses: {
          pose1: {
            title: "Tree Pose 1",
            duration: "11",
            script: "Inhale, lift your hands to the sky."
          }
        }
      },
      class2: {
        title: "Flow Yoga",
        duration: 60,
        location: "IMA",
        date: "03/14/2025",
        time: "3:30pm",
        notes: "Weekly lesson for Yoga Beginner",
        poses: {
          pose4: {
            title: "Downward Dog Pose",
            duration: "11",
            script: "Starting on all fours."
          }
        }
      }
    }
  };


  const poses = SAMPLE_POSES;
  const db = getDatabase();

  // listen for changes on ref, then update
  useEffect(() => {
    // firebasePush(userRef, testUser);
    const db = getDatabase();
    const classesRef = ref(db, "users/-OLIU8bKC0RQGTjABKQr/classes");

    onValue(classesRef, (snapshot) => {
      const dataObj = snapshot.val();
      console.log("dataObj: " + dataObj);

      const keyArray = Object.keys(dataObj);
      // console.log(keyArray);
      const dataArr = keyArray.map((keyString) => {
        const transformed = dataObj[keyString];
        transformed.firebaseKey = keyString;
        return transformed;
      })

      setUserClasses(dataArr);
      // console.log(dataObj);
    });
  }, [])

  console.log("userClasses: " + userClasses);
  // console.log("sample classes" + SAMPLE_CLASSES);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-classes" element={<ClassPage classes={ userClasses } />} />
        <Route path="/my-classes/:classId/poses" element={<PosePage classes={ userClasses } />} />
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
