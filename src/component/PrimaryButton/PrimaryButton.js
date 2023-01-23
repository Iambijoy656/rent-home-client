import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn bg-orange-500 hover:bg-orange-400 rounded-none duration-500 text-white border-none">
      {children}
    </button>
  );
};

export default PrimaryButton;
