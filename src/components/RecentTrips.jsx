import React from 'react';
import RecentTripsCard from './RecentTripsCard';

export default function RecentTrips() {
  return(
    <div className='recent-trips'>
      <div className="recent-trips-title">
        <h1>Recent Trips</h1>
        <h5>You can discover unique destinations using Google Maps.</h5>
      </div>
      <div className="recent-trips-examples">
        <RecentTripsCard img="../src/images/recent-trips-Indonesia.jpg" title="Trip in Indonesia" desc="Sed commodo faucibus nunc, sed egestas velit euismod non. Morbi sagittis nunc vel purus tempus tincidunt. Pellentesque dapibus malesuada nibh, id sollicitudin sem. Morbi imperdiet nibh vitae justo condimentum posuere vel ac lorem. Fusce at purus interdum, placerat orci in, placerat eros. Sed sodales sit amet diam eget rhoncus. Sed ut tellus a nisi bibendum ultrices. Quisque suscipit ligula sed orci fringilla, et vestibulum arcu feugiat. Proin urna lorem, mattis id convallis non, luctus in nisi. Integer a arcu ut felis dapibus porttitor ut ullamcorper urna. Sed lacinia quis elit vitae rutrum."/>
        <RecentTripsCard img="../src/images/recent-trips-Malaysia.jpg" title="Trip in Malaysia" desc="Vestibulum ornare nunc tincidunt posuere suscipit. Vivamus varius sodales aliquam. Curabitur pellentesque eu lacus a tempus. Donec venenatis est id sem tempor, vitae iaculis dolor semper. Proin ac neque vel leo suscipit lacinia. Donec non ipsum nec quam consectetur sodales eu in tortor. Vestibulum tempus dignissim tempus."/>
        <RecentTripsCard img="../src/images/recent-trips-France.jpg" title="Trip in France" desc="Duis rhoncus, dolor id blandit tempor, massa ipsum elementum magna, id sollicitudin orci magna sed nunc. Fusce at velit nisl. Curabitur semper mi id diam commodo, vitae bibendum purus pulvinar. Fusce leo lacus, malesuada in malesuada eu, vehicula et nisl. Vestibulum fermentum lacus ut nisi convallis venenatis. Proin et eros quis ligula aliquam tincidunt sed in ligula. Aenean nec interdum orci. Aenean id gravida metus. Maecenas eget purus posuere, suscipit leo non, tempus dolor. Curabitur maximus nisi pellentesque nisl faucibus imperdiet. Maecenas euismod ipsum at auctor ultricies. Suspendisse turpis tortor, ornare in est quis, pretium eleifend neque."/>
      </div>
    </div>
  )
}