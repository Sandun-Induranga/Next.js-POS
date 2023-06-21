"use client";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdPlaylistRemove } from "react-icons/md";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

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

const ItemsContainer = () => {
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
          Add New Item
        </button>
      </section>
      <ul>
        <li className="grid grid-cols-5 justify-center text-center bg-purple-600 py-2 rounded-lg text-white mb-2">
          <h1>Item Code</h1>
          <h1>Description</h1>
          <h1>Qty On Hand</h1>
          <h1>Unit Price</h1>
          <h1>Options</h1>
        </li>
        <li className="grid grid-cols-5 justify-center text-center bg-white py-2 rounded-lg text-gray-600 mt-1">
          <h1>ITM-001</h1>
          <h1>Biscuit</h1>
          <h1>12</h1>
          <h1>120.00</h1>
          <div className="flex justify-center gap-4">
            <FiEdit2 size={18} className="text-green-400" />
            <MdPlaylistRemove size={18} className="text-red-400" />
          </div>
        </li>
        <li className="grid grid-cols-5 justify-center text-center bg-white py-2 rounded-lg text-gray-600 mt-1">
          <h1>ITM-001</h1>
          <h1>Biscuit</h1>
          <h1>12</h1>
          <h1>120.00</h1>
          <div className="flex justify-center gap-4">
            <FiEdit2 size={18} className="text-green-400" />
            <MdPlaylistRemove size={18} className="text-red-400" />
          </div>
        </li>
        <li className="grid grid-cols-5 justify-center text-center bg-white py-2 rounded-lg text-gray-600 mt-1">
          <h1>ITM-001</h1>
          <h1>Biscuit</h1>
          <h1>12</h1>
          <h1>120.00</h1>
          <div className="flex justify-center gap-4">
            <FiEdit2 size={18} className="text-green-400" />
            <MdPlaylistRemove size={18} className="text-red-400" />
          </div>
        </li>
        <li className="grid grid-cols-5 justify-center text-center bg-white py-2 rounded-lg text-gray-600 mt-1">
          <h1>ITM-001</h1>
          <h1>Biscuit</h1>
          <h1>12</h1>
          <h1>120.00</h1>
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
          <Typography
            id="modal-modal-title"
            variant="div"
            component="div"
            className="!text-gray-600 !font-semibold !text-xl"
          >
            Manage Items
          </Typography>
          <Typography
            className="!mt-6 !w-full !flex !flex-col !gap-4"
            id="modal-modal-description"
          >
            <TextField
              id="outlined-basic"
              label="Item Code"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              id="outlined-basic"
              label="Qty On hand"
              variant="outlined"
              color="secondary"
              required
            />
            <TextField
              id="outlined-basic"
              label="Unit Price"
              variant="outlined"
              color="secondary"
              required
            />
          </Typography>
          <Typography
            id="modal-modal-footer"
            variant="div"
            component="div"
            className="!flex !justify-end !gap-4 !mt-4"
          >
            <button
              className="bg-red-100 px-4 py-2 text-red-600 rounded-lg hover:bg-red-600 hover:text-white"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="bg-green-100 px-4 py-2 text-green-600 rounded-lg hover:bg-green-600 hover:text-white"
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

export default ItemsContainer;
