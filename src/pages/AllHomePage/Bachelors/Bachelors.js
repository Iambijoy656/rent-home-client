import React, { useState } from "react";
import { useEffect } from "react";
import BachelorsHomeCard from "../../../component/BechalorsHomeCard/BachelorsHomeCard";
import Loading from "../../Loading/Loading";

const Bachelors = () => {
  const [loading, setLoading] = useState([]);
  const [bachelorsHome, setBachelorsHome] = useState([]);

  useEffect(() => {
    setLoading(true);
    setBachelorsHome([]);
    fetch("http://localhost:5001/bachelosHomes")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBachelorsHome(data);
      });
  }, []);

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
