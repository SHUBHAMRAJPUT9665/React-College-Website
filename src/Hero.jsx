import React from "react";

const Hero = () => {
  const imageUrl =
    "https://images.unsplash.com/20/cambridge.JPG?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Replace this with your image URL
  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: "brightness(0.5)",
        }}
      ></div>
      <div className="flex flex-col items-center justify-center h-screen z-10 relative">
        <h1 className="text-7xl font-medium	 text-center text-white mb-4">
          education is the best key <br /> success in life
        </h1>
        <p className="text-center text-xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          vitae, quam eum consequuntur quibusdam <br /> exercitationem commodi
          libero hic vero ipsum!
        </p>
        <button className="bg-white text-black m-4  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
