"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FiSlack } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const SlideBar = (props) => {
  const [isDashboard, setIsDashboard] = useState(props.name == "dashboard");
  const [isCustomers, setIsCustomers] = useState(props.name == "customers");
  const [isItems, setIsItems] = useState(props.name == "items");
  const [isPurchaseOrder, setIsPurchaseOrder] = useState(
    props.name == "purchaseOrder"
  );

  const focusDashboard = () => {
    setIsDashboard(true);
    setIsCustomers(false);
    setIsItems(false);
    setIsPurchaseOrder(false);
  };

  const focusCustomers = () => {
    setIsDashboard(false);
    setIsCustomers(true);
    setIsItems(false);
    setIsPurchaseOrder(false);
  };

  const focusItems = () => {
    setIsDashboard(false);
    setIsCustomers(false);
    setIsItems(true);
    setIsPurchaseOrder(false);
  };

  const focusPurchaseOrder = () => {
    setIsDashboard(false);
    setIsCustomers(false);
    setIsItems(false);
    setIsPurchaseOrder(true);
  };

  return (
    <section className="w-20 h-screen bg-white border-r border-gray-200 flex items-center flex-col gap-6 fixed">
      <FiSlack size={40} className="mb-10 mt-2 text-purple-600" />
      <Link
        href="/"
        className={
          isDashboard
            ? "p-2 bg-purple-600 rounded-lg text-white"
            : "p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
        }
        onClick={focusDashboard}
      >
        <RxDashboard size={22} />
      </Link>

      <Link
        href="/customers"
        className={
          isCustomers
            ? "p-2 bg-purple-600 rounded-lg text-white"
            : "p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
        }
        onClick={focusCustomers}
      >
        <BiUser size={22} />
      </Link>

      <Link
        href="/items"
        className={
          isItems
            ? "p-2 bg-purple-600 rounded-lg text-white"
            : "p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
        }
        onClick={focusItems}
      >
        <HiOutlineShoppingBag size={22} />
      </Link>

      <Link
        href="/purchaseOrder"
        className={
          isPurchaseOrder
            ? "p-2 bg-purple-600 rounded-lg text-white"
            : "p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200"
        }
        onClick={focusPurchaseOrder}
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
