import React from "react";
import vedio from "../../assets/vedio/homeVedio.mp4";
import homeIcon from "../../assets/images/homeIcon.png";

const About = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center overflow-ellipsis">
        <video
          className="w-full h-[50%] cover"
          src={vedio}
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
        >
          {" "}
        </video>
        <div className="text-3xl md:text-6xl uppercase font-bold text-white absolute flex justify-center items-center">
          <img
            className="absolute w-20 h-20 justify-center items-center -mt-48 hidden md:block"
            src={homeIcon}
            alt=""
          />
          <h1 className="text-center font-serif space-x-1 space-y-1">
            Find Your <br /> Dream <span className="text-orange-500">Home</span>{" "}
            By Us
          </h1>
        </div>
      </div>

      <section className="py-6 bg-gray-200 my-10">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
           Meet Our team
          </h1>
          <p className="max-w-2xl text-center ">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
            quam natus quis nihil quod, hic explicabo doloribus magnam neque,
            exercitationem eius sunt!
          </p>
          <div className="flex flex-row flex-wrap-reverse justify-center">
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?0"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="text-gray-400">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full"
                src="https://source.unsplash.com/100x100/?portrait?1"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="text-gray-400">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full "
                src="https://source.unsplash.com/100x100/?portrait?2"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="text-gray-400">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?3"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?4"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="text-gray-900">Visual Designer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?5"
              />
              <p className="text-xl font-semibold leading-tight">
                Leroy Jenkins
              </p>
              <p className="">Visual Designer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
