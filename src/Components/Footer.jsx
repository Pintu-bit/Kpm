import React from "react";
import "tailwindcss/tailwind.css";

const Footer = () => {
  // Get the current year
  const year = new Date().getFullYear();

  // Return the JSX code for the footer
  return (
    <footer className="bg-gray-200 p-2">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-lg text-green-900 font-bold">
          kpmseeds.com
        </p>
        <p className="text-sm text-green-700 font-medium">
          © {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
