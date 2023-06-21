import React from "react";
import { BiUser } from "react-icons/bi";

const Card = () => {
  return (
    <div className="flex justify-between items-center lg:w-1/3 md:w-1/2 w-full border rounded px-6 py-2">
      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Customers</h1>
        <h4 className="text-xl text-gray-500">188</h4>
      </div>
      <div className="p-6 bg-purple-100 rounded-lg text-purple-600 hover:bg-gray-200">
        <BiUser size={40} />
      </div>
    </div>
  );
};

export default Card;
