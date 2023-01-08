import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn bg-orange-500 text-white border-none">
      {children}
    </button>
  );
};

export default PrimaryButton;
