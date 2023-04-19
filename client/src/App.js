import React, { Component } from 'react';
import './App.css';
import Main from "./components/SocialCommunity/Main";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Auth from "./components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import MainQuestion from './components/ViewQuestions';
import Profile from './components/Profile/Profile';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import WelcomeScreen from './components/WelcomeScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        setIsAuth(true)
        console.log(authUser)
        console.log(user)
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        setIsAuth(false)
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/main" element={<Main uName={user} />} />
          <Route exact path="/" element={<WelcomeScreen data={isAuth} uName={user} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/question" element={<MainQuestion />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;