import React from "react";
import { BiUser } from "react-icons/bi";

const Card = () => {
  return (
    <div className="flex justify-between items-center xl:w-1/4 lg:w-1/3 md:w-1/2 w-full border rounded-lg sm:px-6 px-2 py-4">
      <div>
        <h1 className="text-2xl font-semibold text-gray-700">Customers</h1>
        <h4 className="text-xl text-gray-500">188</h4>
      </div>
      <div className="sm:p-6 p-2 bg-purple-100 rounded-lg text-purple-600 hover:bg-gray-200">
        <BiUser size={40} />
      </div>
    </div>
  );
};

export default Card;
