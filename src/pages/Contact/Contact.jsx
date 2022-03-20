import React, { useEffect } from "react";
import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import Info from "../../components/Contact/Info/Info";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact - DISPATCHNHAUL";
  }, []);
  return (
    <>
      <ContactHero />
      <Info />
    </>
  );
};

export default Contact;
