import React from "react";

export default function RecentTripsCard({img, title, desc}) {
 return(
  <div className="recent-trips-card">
    <div className="img-container">
      <img src={img} alt={title}/>
    </div>
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
 )
}