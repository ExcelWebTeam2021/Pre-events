import React from "react";

export default function Sidebar() {
   return (
      <div style={{ backgroundColor: "#4dabf7" }}>
         This is a Sidebar
         <p>
            <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
            <label for='vehicle1'> I have a bike</label>
            <br />
            <input type='checkbox' id='vehicle2' name='vehicle2' value='Car' />
            <label for='vehicle2'> I have a car</label>
            <br />
            <input type='checkbox' id='vehicle3' name='vehicle3' value='Boat' />
            <label for='vehicle3'> I have a boat</label>
            <br />
         </p>
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quibusdam, quae aliquid sit vitae atque quos fuga. Voluptates suscipit voluptatibus placeat accusantium quo nostrum, laborum quibusdam nesciunt provident id ratione vitae perferendis, quae obcaecati odio. Cum quo omnis corrupti
            impedit eligendi nihil soluta quaerat enim blanditiis, voluptate dignissimos deleniti. Voluptates!
         </p>
      </div>
   );
}
