import React from "react";
//  local components
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Choose from "../../components/Choose/Choose";
const Home = (props) => {
  return (
    <>
      <Hero />
      <About />
      <Choose />
    </>
  );
};

export default Home;
