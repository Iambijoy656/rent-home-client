import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Explore from "../Explore/Explore";
import HomeSection from "../HomeSection/HomeSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeSection></HomeSection>
      <Explore></Explore>
    </div>
  );
};

export default Home;
