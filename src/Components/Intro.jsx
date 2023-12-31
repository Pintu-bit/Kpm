import React from "react";
import "tailwindcss/tailwind.css";
import Banner from '../assets/Banner.jpg'


const Intro = () => {
  // Define the intro text for KPM seeds
  const intro =
    "'We offer a wide range of high quality,high yeilding, disease resistant seeds'";

  // Return the JSX code for the intro section
  return (
    <section id="intro" className="h-screen md:h-[25rem]">
      {/* Use the background image as the style of the section */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Use a semi-transparent overlay to make the text more visible */}
        <div className="h-full w-full bg-black bg-opacity-30 flex items-center justify-center">
          {/* Use a card component to display the intro text */}
          <div className="max-w-4xl p-8 mt-[]  rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-green-black">Welcome to KPM Seeds</h1>
            <p style={{fontFamily:'sans-serif'}} className="text-lg font-bold text-white">{intro}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

