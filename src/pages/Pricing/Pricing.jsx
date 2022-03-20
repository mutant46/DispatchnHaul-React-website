import React, { useEffect } from "react";
import Main from "../../components/Pricing/Main";
const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing - DISPATCHNHAUL";
  }, []);
  return <Main />;
};

export default Pricing;
