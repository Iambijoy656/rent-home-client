import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import LatestBachelorsHome from "../../LatestBachelorsHome/LatestBachelorsHome";
import LatestFamilyHome from "../../LatestFamillyHome/LatestFamilyHome";
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
      <LatestFamilyHome></LatestFamilyHome>
      <HomeSection></HomeSection>
      <Explore></Explore>
    </div>
  );
};

export default Home;
