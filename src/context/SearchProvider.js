import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [district, setDistrict] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState({
    price: "",
    type: "",
  });
  const [homes ,setHomes] = useState([]);
  const [submitOn ,setSubmitOn] = useState(false);

  const searchInfo = {price, setPrice,homes ,setHomes,location,setLocation,district, setDistrict,type, setType,submitOn ,setSubmitOn,state, setState};
  return (
    <SearchContext.Provider value={searchInfo}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
