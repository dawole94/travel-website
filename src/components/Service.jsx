import React from "react";
import FrontImage from './FrontImage';
import RecentTrips from "./RecentTrips";

export default function Service() {
  return(
    <>
      <FrontImage bgImage="./src/images/service.jpg" pageTitle="Service" fontSize='3rem' letterSpacing='0.2rem' marginBottom='0'/>
      <RecentTrips marginTop='3rem'/>
    </>
  );
}