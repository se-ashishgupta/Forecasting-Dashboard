import React from "react";

const Card = ({ title, subTitle }) => {
  return (
    <div className="p-6 border-2 border-blue-900 shadow-xl shadow-blue-200 rounded-lg grid place-items-center bg-gray-100">
      <h1 className=" text-4xl font-bold text-blue-900">{title}</h1>
      <span className=" text-blue-900">{subTitle}</span>
    </div>
  );
};

export default Card;
