import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import store from "./Redux/Store/Store";

export default function DayDropdownMenu() {
  var tableData = useSelector((state) => state.comp.jsonData);
  var compName = useSelector((state) => state.comp.compName);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(tableData["scores"]);
  const [selectedLabel, setSelectedLabel] = useState("Scores"); // Initialize with the first label
  
  useEffect(() => {
    store.dispatch({
      type: "compData_UPDATED",
      payload: tableData[compName],
    });
  }, [tableData]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (itemKey, label) => {
    setSelectedItem(tableData[itemKey]);
    setSelectedLabel(label);
    toggleDropdown();
    store.dispatch({
      type: "compName_UPDATED",
      payload: itemKey,
    });
    dispatchData(tableData[itemKey])
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
        {selectedLabel}{" "}
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
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute" // Add absolute here
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                onClick={() => handleItemClick("scores", "Scores")} // Pass the label as a second argument
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Scores
              </a>
            </li>
            <li>
              <a
                onClick={() => handleItemClick("wacc", "WACC")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                WACC
              </a>
            </li>
            
<li>
              <a
                onClick={() =>
                  handleItemClick("factory_utilization", "Factory Utilisation")
                }
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Factory Utilisation
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  handleItemClick("employee_engagement", "Employee Engagement")
                }
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Employee Engagement
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  handleItemClick("interest_coverage", "Interest Coverage")
                }
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Interest Coverage
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  handleItemClick(
                    "marketing_spend_rev",
                    "Cumulative Marketing SpendRev"
                  )
                }
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Cumulative Marketing SpendRev
              </a>
            </li>
            <li>
              <a
                onClick={() => handleItemClick("e_cars_sales", "eCar Sales")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                eCar Sales
              </a>
            </li>
            <li>
              <a
                onClick={() => handleItemClick("co2_penalty", "CO2 Penalty")}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                CO2 Penalty
              </a>
            </li>
            
          </ul>
        </div>
      )}
    </div>
  );
}

export function dispatchData(selectedItem) {
  store.dispatch({
    type: "compData_UPDATED",
    payload: selectedItem,
  });
}
