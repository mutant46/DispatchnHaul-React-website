import React, { useEffect } from "react";
// local components
import Main from "../../components/Services/Main";
const Services = () => {
  useEffect(() => {
    document.title =
      "Services by Dispatch n Haul: all services for truck drivers";
  }, []);
  return <Main />;
};

export default Services;
