import React from "react";
import FrontImage from './FrontImage';
import Form from "./Form";

export default function Service() {
  return(
    <>
      <FrontImage bgImage="./src/images/contact.jpg" pageTitle="Contact" fontSize='3rem' letterSpacing='0.2rem' marginBottom='0'/>
      <Form/>
    </>
  );
}