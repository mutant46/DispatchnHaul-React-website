import React, { useEffect } from "react";
import Main from "../../components/Pricing/Main";
const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing - Dispatch n Haul";
  }, []);
  return <Main />;
};

export default Pricing;
