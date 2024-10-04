import React from 'react'
import { useState, useEffect } from 'react'

import {
    AboutUs,
    //Chef,
    //FindUs,
    Footer,
    //Gallery,
    Header,
    Testimonials,
    Faq,
    //Intro,
    Laurels,
    Programs,
  } from "../container";
  import { Navbar } from "../components";

export const Root = () => {
    const [ , setLoggedIn] = useState(false)
    //const [idx, setIdx] = useState(0)
  
    useEffect(() => {
      // Fetch the user email and token from local storage
      const user = localStorage.getItem('user')
      // If the token/email does not exist, mark the user as logged out
      if (!user || !user.token) {
        setLoggedIn(false)
        //setIdx(0)
        return
      }
    }, [])

  return (
    <div>
        <Navbar />
        <Header />
        <Programs />
        <AboutUs />
        <Laurels />
        {/*<SpecialMenu />*/}
        <Faq />
        {/*<Chef />*/}
        {/*<Intro />*/}

        {/*<Gallery />*/}
        <Testimonials />
        {/*<FindUs />*/}
        <Footer />
    </div>
  )
}
