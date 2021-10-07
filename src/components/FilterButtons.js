import React from "react";

const FilterButtons = () => {
  return (
    <div className="container px-10 md:mx-auto">
      <div className="flex flex-wrap pt-4">
        <div className="flex-shrink-0 mr-5 mb-4">
          <div className="group hover:bg-gray-100 border border-gray-400 text-gray-400 px-4 py-2 rounded-xl flex items-center cursor-pointer h-full">
            <button type="button" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:bg-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              Filters
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 mr-5 mb-4">
          <div className="group hover:bg-gray-100 border border-gray-400 text-gray-400 px-4 py-2 rounded-xl flex items-center cursor-pointer h-full">
            <button type="button" className="flex">
              Rating: 4.0+
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 mr-5 mb-4">
          <div className="group hover:bg-gray-100 border border-gray-400 text-gray-400 px-4 py-2 rounded-xl flex items-center cursor-pointer h-full">
            <button type="button" className="flex">
              Safe and Hygenic
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 mr-5 mb-4">
          <div className="group hover:bg-gray-100 border border-gray-400 text-gray-400 px-4 py-2 rounded-xl flex items-center cursor-pointer h-full">
            <button type="button" className="flex">
              Pure Veg
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 mr-5 mb-4">
          <div className="group hover:bg-gray-100 border border-gray-400 text-gray-400 px-4 py-2 rounded-xl flex items-center cursor-pointer h-full">
            <button type="button" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:bg-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
              Delivery Time
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 mr-5 mb-4">
          <div className="group hover:bg-gray-100 border border-gray-400 text-gray-400 px-4 py-2 rounded-xl flex items-center cursor-pointer h-full">
            <button type="button" className="flex">
              Great Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
