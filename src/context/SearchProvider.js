import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [district, setDistrict] = useState("");
  const [type, setType] = useState("");
  const [submitOn ,setSubmitOn] = useState(false);

  const searchInfo = {location,setLocation,district, setDistrict,type, setType,submitOn ,setSubmitOn};
  return (
    <SearchContext.Provider value={searchInfo}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
