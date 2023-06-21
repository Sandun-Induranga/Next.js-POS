import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdPlaylistRemove } from "react-icons/md";

const CustomersContainer = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <ul>
        <li className="grid grid-cols-5 justify-center text-center bg-purple-600 py-2 rounded-lg text-white">
          <h1>Customer ID</h1>
          <h1>Name</h1>
          <h1>Address</h1>
          <h1>Phone Number</h1>
          <h1>Options</h1>
        </li>
        <li className="grid grid-cols-5 justify-center text-center bg-white py-2 rounded-lg text-gray-600 mt-1">
          <h1>C00-001</h1>
          <h1>Dasun</h1>
          <h1>Galle</h1>
          <h1>0762334674</h1>
          <div className="flex justify-center gap-4">
            <FiEdit2 size={18} />
            <MdPlaylistRemove size={18} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CustomersContainer;
