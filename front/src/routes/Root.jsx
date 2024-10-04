import React from 'react'
import {  Routes, Route } from "react-router-dom";
import useFadeInOnScroll from '../hooks/useFadeInOnScroll';
import { useState, useEffect } from 'react'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

import {
    Footer,
  } from "../container";
  import { Navbar } from "../components";

export const Root = () => {
    const [ , setLoggedIn] = useState(false)
    useFadeInOnScroll();
  
    useEffect(() => {
      // Fetch the user email and token from local storage
      const user = localStorage.getItem('user')
      // If the token/email does not exist, mark the user as logged out
      if (!user || !user.token) {
        setLoggedIn(false)
        return
      }
    }, [])

    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login setLoggedIn={setLoggedIn} />} />
        </Routes>
        <Footer />
      </div>
    );
}
