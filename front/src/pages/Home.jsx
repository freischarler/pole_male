import React from 'react'
import {
    AboutUs,
    Header,
    Testimonials,
    Faq,
    Laurels,
    Programs,
  } from "../container";

export const Home = () => {
  return (
    <>
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
    </>
  )
}
