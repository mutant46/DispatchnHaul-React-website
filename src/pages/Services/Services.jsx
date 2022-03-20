import React, { useEffect } from "react";
// local components
import Main from "../../components/Services/Main";
const Services = () => {
  useEffect(() => {
    document.title = "Services - Dispatch n Haul";
  }, []);
  return <Main />;
};

export default Services;
