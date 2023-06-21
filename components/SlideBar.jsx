import Link from "next/link";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FiSlack } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const SlideBar = () => {
  return (
    <section className="w-20 h-screen bg-white border-r border-gray-200 flex items-center flex-col gap-6 fixed">
      <FiSlack size={40} className="mb-10 mt-2 text-purple-600" />
      <Link href="/" className="p-2 bg-purple-600 rounded-lg text-white">
        <RxDashboard size={22} />
      </Link>

      <Link
        href="/customers"
        className={"p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"}
      >
        <BiUser size={22} />
      </Link>

      <Link
        href="/customers"
        className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
      >
        <HiOutlineShoppingBag size={22} />
      </Link>

      <Link
        href="/customers"
        className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
      >
        <BsCart2 size={22} />
      </Link>

      <Link
        href="/customers"
        className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
      >
        <IoSettingsOutline size={22} />
      </Link>
    </section>
  );
};

export default SlideBar;
