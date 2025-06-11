import React from "react";

const AdvertismentCard = ({ image, index }) => {
  return (
    <div
      className={`max-w-3xl w-full border rounded-lg shadow-md flex sm:flex-row  overflow-hidden    gap-8 ${
        index % 2 == 0 ? "sm:items-start" : "sm:items-end"
      } flex-col m-4 transition-transform hover:scale-105`}
    >
      <div className="sm:h-64 sm:w-64 h-48 aspect-square  self-center sm:flex-shrink-0">
        <img
          src={image.image}
          alt="image here"
          className="w-full h-full border rounded object-cover object-top"
        />
      </div>


      <div className="self-start">
        <h1 className="text-black text-2xl font-bold p-2 ">{image.title}</h1>
        <p className="text-black font-light px-2">{image.description}</p>
        <button className="text-white cursor-pointer  border border-black rounded px-2 m-2 bg-gray-500 ">Buy</button>
      </div>
    </div>
  );
};

export default AdvertismentCard;

