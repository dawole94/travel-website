import React from 'react'
import '../App.css'
import MainImage from './MainImage'
import PopularDestinations from './PopularDestinations';
import RecentTrips from './RecentTrips';

export default function Home() {
  return (
    <>
      <MainImage/>
      <PopularDestinations/>
      <RecentTrips marginTop='5rem'/>
    </>
  )
}