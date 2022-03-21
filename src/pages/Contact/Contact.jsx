import React, { useEffect } from "react";
import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import Info from "../../components/Contact/Info/Info";
import Form from "../../components/Contact/Form";
const Contact = () => {
  useEffect(() => {
    document.title = "Our contacts | Dispatch n Haul";
  }, []);
  return (
    <>
      <ContactHero />
      <Info />
      <Form />
    </>
  );
};

export default Contact;
