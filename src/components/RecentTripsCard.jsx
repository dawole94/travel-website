import React from "react";

export default function RecentTripsCard({img, title, desc}) {
 return(
  <div className="recent-trips-card">
    <img src={img} alt={title}/>
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
 )
}