import React, { useContext, useEffect, useState } from "react";
import FamilyHomeCard from "../../../component/FamilyHomeCard/FamilyHomeCard";
import { SearchContext } from "../../../context/SearchProvider";
import Loading from "../../Loading/Loading";

const Family = () => {
  const [loading, setLoading] = useState(false);
  const [familyHome, setFamilyHome] = useState([]);
  const {
    location,
    setLocation,
    district,
    setDistrict,
    type,
    setType,
    price,
    setPrice,
    submitOn,
  } = useContext(SearchContext);

  useEffect(() => {
    setLoading(true);
    setFamilyHome([]);
    fetch(
      `http://localhost:5001/homes?location=${location}&&district=${district}&&type=${type}&&price=${price}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setFamilyHome(data);
        setDistrict("");
        setType("");
        setLocation("");
      });
  }, [submitOn]);
  return (
    <div className="mb-10 max-w-[70%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {loading ? <Loading></Loading> : ""}
        {familyHome.length > 0 &&
          familyHome.map((home) => (
            <FamilyHomeCard key={home._id} home={home}></FamilyHomeCard>
          ))}
      </div>
    </div>
  );
};

export default Family;
