"use client";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdPlaylistRemove } from "react-icons/md";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid rgb(243 244 246 / var(--tw-bg-opacity))",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  color: "rgb(55 65 81 / var(--tw-text-opacity))",
};

const CustomersContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="p-10 bg-gray-100 min-h-screen outline-none border-none">
      <section className="flex sm:justify-between items-center sm:flex-row flex-col gap-4 mb-4">
        <input
          type="search"
          className="lg:w-1/3 p-2 rounded-lg mb-2"
          placeholder="Search"
        />
        <button
          className="bg-purple-100 px-4 py-2 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white"
          onClick={handleOpen}
        >
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Manage Customers
          </Typography>
          <Typography
            className="!mt-6 !w-full !flex !flex-col !gap-4"
            id="modal-modal-description"
          >
            <TextField
              id="outlined-basic"
              label="Customer ID"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              id="outlined-basic"
              label="Customer Name"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              color="secondary"
              required
            />
          </Typography>
          <Typography id="modal-modal-footer" variant="h6" component="h2">
            <button
              className="bg-red-100 px-2 py-1 text-red-600 rounded-lg hover:bg-red-600 hover:text-white"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="bg-purple-100 px-2 py-1 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white"
              onClick={handleClose}
            >
              Save
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomersContainer;
