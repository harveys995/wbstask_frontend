import React, { useState } from "react";
import store from "./Redux/Store/Store";
import day1 from "./JSONData/2023-06-19.json";
import day2 from "./JSONData/2023-06-20.json";
import day3 from "./JSONData/2023-06-21.json";
import day4 from "./JSONData/2023-06-23.json";
import day5 from "./JSONData/2023-06-24.json";
import day6 from "./JSONData/2023-06-25.json";

const dayDataMap = {
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
};

export default function DayDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Day 1");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (itemKey) => {
    setSelectedItem(itemKey);
    toggleDropdown();
    dispatchData(itemKey)
    store.dispatch({
      type: "jsonData_UPDATED",
      payload: dayDataMap[itemKey],
    });
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {selectedItem}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          style={{ position: "absolute" }}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                onClick={() => handleItemClick("day1")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Day 1
              </a>
            </li>

            <li>
              <a
                onClick={() => handleItemClick("day2")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Day 2
              </a>
            </li>
            <li>
              <a
                onClick={() => handleItemClick("day3")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Day 3
              </a>
            </li>
            <li>
              <a
                onClick={() => handleItemClick("day4")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Day 4
              </a>
            </li>
            <li>
              <a
                onClick={() => handleItemClick("day5")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Day 5
              </a>
            </li>
            <li>
              <a
                onClick={() => handleItemClick("day6")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Day 6
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function dispatchData(selectedItem) {
  store.dispatch({
    type: "day_UPDATED",
    payload: selectedItem,
  });
}
