import React, { useEffect } from "react";
//  local components
import Hero from "../../components/Home/Hero/Hero";
import About from "../../components/Home/About/About";
import Choose from "../../components/Home/Choose/Choose";
import Attract from "../../components/Home/Attract/Attract";
const Home = (props) => {
  useEffect(() => {
    document.title = "Dispatch n Haul";
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Attract />
      <Choose />
    </>
  );
};

export default Home;
