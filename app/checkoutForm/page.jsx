"use client";
import { useState } from "react";
import ThermalPrinter from "../components/ThermalPrinter.js";

export default function checkoutForm() {
  const [FormData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    contact: "",
  });
  function handleNextbtn() {
    return (
      <div>
        <h1>handlenextubtn</h1>
      </div>
    );
  }
  function handleprintbtn() {
    return 1;
  }

  return (
    <div className="max-w-lg mx-auto lg:mt-10">
      <div className="bg-white shadow-md rounded-lg p-4 dark:bg-zinc-800">
        <div className="flex justify-between items-center mb-4">
          <div className="w-1/3">
            <div className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Step 1: Shipping
            </div>
            <div className="text-lg font-bold">Shipping Information</div>
          </div>
          <div className="w-2/3">
            <div className="flex justify-center items-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-300"></div>
              <div className="w-4 h-0.5 bg-blue-200 dark:bg-blue-100 mx-1"></div>
              <div className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-400"></div>
              <div className="w-4 h-0.5 bg-zinc-200 dark:bg-zinc-400 mx-1"></div>
              <div className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-400"></div>
            </div>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={FormData.name}
              required
              onChange={(e) => {
                // setEmployeeStatus(e.target.value);
                setFormData({
                  ...FormData,
                  name: e.target.value,
                });
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              required
              name="address"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              required
              name="city"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Contact
            </label>
            <input
              type="number"
              id="Contact"
              name="Contact"
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-zinc-700 dark:text-white dark:border-zinc-600"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              id="nextBtn"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
              onClick={handleNextbtn}
            >
              Next
            </button>
            {/* <button
              type="submit"
              id="nextBtn"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
              onClick={handleprintbtn}
            >
              PRINT RECEIPT
            </button> */}
            <ThermalPrinter />
          </div>
        </form>
      </div>
    </div>
  );
}
