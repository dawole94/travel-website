import React from "react";

function PopularDestinations() {
  return (
    <div className="pop-dest">
      <div className="pop-dest-title">
        <h1>Popular destinations</h1>
        <h5>Tours give you the opportunity to see a lot within a time frame</h5>
      </div>
      <div className="two-pop-dest">
        <div className="first-pop-dest">
          <div className="volcano-text">
            <div className="pop-dest-images pdi-mobile">
              <img className="image-bottom" src="./src/images/pop-dest-1.jpg"></img>
              <img className="image-top" src="./src/images/pop-dest-2.jpg"></img>
            </div>
            <h2>Taal Volcano, Batangas</h2>
            <p>Proin id neque vehicula, commodo sapien ut, vulputate arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Cras auctor ligula mi, eget pharetra metus viverra sed. Vivamus aliquam lacus id mollis condimentum. Etiam a iaculis ipsum. Phasellus consequat lorem vel nunc scelerisque ultrices at consectetur ante. Maecenas nec lectus gravida, egestas ante eu, porta eros. Nullam a lacus sit amet sem porttitor vestibulum. Donec non aliquet lacus, id vulputate leo. Vestibulum scelerisque ac erat non cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla eget eleifend mi, in molestie nisl. Fusce efficitur auctor dui a interdum. </p>
          </div>
          <div className="pop-dest-images pdi-normal">
            <img className="image-bottom" src="./src/images/pop-dest-1.jpg"></img>
            <img className="image-top" src="./src/images/pop-dest-2.jpg"></img>
          </div>
        </div>
        <div className="second-pop-dest">
          <div className="pop-dest-images">
            <img className="image-bottom" src="./src/images/pop-dest-3.jpg"></img>
            <img className="image-top" src="./src/images/pop-dest-4.jpg"></img>
          </div>
          <div className="mount-text">
            <h2>Mt. Daguldul, Batangas</h2>
            <p>Pellentesque tristique congue orci, et venenatis neque viverra vel. Cras suscipit neque vitae luctus euismod. Mauris aliquet eleifend orci, id malesuada nibh semper sed. Nullam odio sapien, ullamcorper non mollis vel, rutrum eleifend sapien. Quisque nibh dolor, lobortis ut dui et, auctor tempus tortor. Ut eget cursus neque, vel sollicitudin sem. Pellentesque laoreet, odio fringilla placerat laoreet, augue tellus iaculis mauris, in commodo mauris ligula a tellus. Cras ac magna ut augue posuere lobortis eget at felis. Mauris sed tortor elit. Ut egestas est sit amet vulputate facilisis. Etiam molestie tristique lectus maximus hendrerit. In mattis scelerisque efficitur. Integer magna augue, varius eget malesuada ac, aliquam ornare mi. Ut nisl arcu, varius id ornare eget, finibus eget metus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularDestinations