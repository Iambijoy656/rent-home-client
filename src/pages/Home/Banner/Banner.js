import React from "react";
import house from "../../../assets/images/bannerhouse.png";
import PrimaryButton from "../../../component/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[#f2f6f7] my-4">
      <div className={`hero justify-center  bg-no-repeat bg-cover bg-center`}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={house} className=" lg:w-1/2 rounded-lg" alt="" />
          <div>
            <h1 className="text-5xl font-bold ">
              Find Your Dream <br /> House By Us
            </h1>
            <p className="py-6 text-justify mr-5">
              Are you searching for house rent in Dhaka? Renting a house in
              Dhaka sounds to be a lengthy process. We’ll make that easier for
              you. RENTS (Real Estate Needs with Trusted Solutions) is the
              leading online rental platform to help you with any home rental
              queries. The best thing is you will the best house for rent within
              your budget.
            </p>

            <Link to="/appointment">
              {" "}
              <PrimaryButton>Book A House</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
