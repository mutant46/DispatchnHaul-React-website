import React, { useEffect } from "react";
import Main from "../../components/Pricing/Main";
const Pricing = () => {
  useEffect(() => {
    document.title = "Packages & Pricing | Dispatch n Haul";
  }, []);
  return <Main />;
};

export default Pricing;
