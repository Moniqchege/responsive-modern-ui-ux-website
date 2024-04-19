import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transition duration-300 ease-in-out
  hover:bg-blue-600 hover:scale-105 hover:shadow-lg ${styles}`}>
    Get Started
  </button>
);

export default Button;