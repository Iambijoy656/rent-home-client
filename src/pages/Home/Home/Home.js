import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import LatestBachelorsHome from "../../LatestBachelorsHome/LatestBachelorsHome";
import SearchingSection from "../../SearchingSection/SearchingSection";
import Banner from "../Banner/Banner";
import Explore from "../Explore/Explore";
import HomeSection from "../HomeSection/HomeSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SearchingSection></SearchingSection>
      <LatestBachelorsHome></LatestBachelorsHome>
      <HomeSection></HomeSection>
      <Explore></Explore>
    </div>
  );
};

export default Home;
