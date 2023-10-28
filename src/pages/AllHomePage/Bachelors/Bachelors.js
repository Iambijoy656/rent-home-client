import React, { useContext, useState } from "react";
import { useEffect } from "react";
import BachelorsHomeCard from "../../../component/BechalorsHomeCard/BachelorsHomeCard";
import { SearchContext } from "../../../context/SearchProvider";
import Loading from "../../Loading/Loading";

const Bachelors = () => {
  const [loading, setLoading] = useState([]);
  const [bachelorsHome, setBachelorsHome] = useState([]);
  const {
    location,
    setLocation,
    district,
    setDistrict,
    type,
    setType,
    state,
    price,
    setPrice,
    setState,
    submitOn,
  } = useContext(SearchContext);


  useEffect(() => {
    setLoading(true);
    setBachelorsHome([]);
    fetch(
      `http://localhost:5001/homes?location=${location}&&district=${district}&&type=${type}&&price=${price}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBachelorsHome(data);
        // setLocation("");
        // setType("");
        // setDistrict("");
      });
  }, [submitOn]);


  //  const path = window.location.pathname
  // const homeType = (path.split('/')[2])

  // console.log(state.type = homeType)
  // console.log(state)

  return (
    <div className="mb-10 max-w-[70%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {loading ? <Loading></Loading> : ""}
        {bachelorsHome.length > 0 &&
          bachelorsHome.map((home) => (
            <BachelorsHomeCard key={home._id} home={home}></BachelorsHomeCard>
          ))}
      </div>
    </div>
  );
};

export default Bachelors;
