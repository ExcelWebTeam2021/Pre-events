import React from "react";
import Typewriter from "typewriter-effect";
import "./Header.css";
import excellogo from "../../assets/excel2020.png";

const Header = () => {
   return (
      <div className='container'>
         <section class='header row'>
            <div class='header-text col-7'>
               <h1 class='header-excel'>Excel 2021</h1>

               <Typewriter
                  onInit={(typewriter) => {
                     typewriter.typeString("Inspire").pauseFor(1000).deleteAll().typeString("Innovate").pauseFor(1000).deleteAll().typeString("Engineer").pauseFor(1000).deleteAll().start();
                  }}
               />

               <p class='header-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <img class='excel-logo col-3' src={excellogo} />
         </section>
      </div>
   );
};

export default Header;
