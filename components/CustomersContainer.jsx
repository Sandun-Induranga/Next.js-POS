"use client";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdPlaylistRemove } from "react-icons/md";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

const CustomersContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-10 bg-gray-100 min-h-screen outline-none border-none">
      <section className="flex sm:justify-between items-center sm:flex-row flex-col gap-4 mb-4">
        <input
          type="search"
          className="lg:w-1/3 p-2 rounded-lg mb-2"
          placeholder="Search"
        />
        <button className="bg-purple-100 px-4 py-2 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white">
          Add New Customer
        </button>
      </section>
      <ul>
        <li className="grid grid-cols-5 justify-center text-center bg-purple-600 py-2 rounded-lg text-white mb-2">
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
            <FiEdit2 size={18} className="text-green-400" />
            <MdPlaylistRemove size={18} className="text-red-400" />
          </div>
        </li>
        <li className="grid grid-cols-5 justify-center text-center bg-white py-2 rounded-lg text-gray-600 mt-1">
          <h1>C00-001</h1>
          <h1>Dasun</h1>
          <h1>Galle</h1>
          <h1>0762334674</h1>
          <div className="flex justify-center gap-4">
            <FiEdit2 size={18} className="text-green-400" />
            <MdPlaylistRemove size={18} className="text-red-400" />
          </div>
        </li>
        <li className="grid grid-cols-5 justify-center text-center bg-white py-2 rounded-lg text-gray-600 mt-1">
          <h1>C00-001</h1>
          <h1>Dasun</h1>
          <h1>Galle</h1>
          <h1>0762334674</h1>
          <div className="flex justify-center gap-4">
            <FiEdit2 size={18} className="text-green-400" />
            <MdPlaylistRemove size={18} className="text-red-400" />
          </div>
        </li>
      </ul>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomersContainer;
