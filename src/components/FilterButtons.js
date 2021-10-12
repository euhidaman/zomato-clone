import React from 'react'

const FilterButtons = () => {
    return (
        <div class="flex justify-start items-center my-3 md:mx-10">
            <div class="flex md: overflow-auto scrollbar-hide">
                <button type="button" class="flex bg-white hover:bg-gray-100 text-gray-40 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:bg-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Filters
                </button>
                <button type="button" class="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out">
                    Rating: 4.0+
                </button>
                <button type="button" class="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out">
                    Safe and Hygenic
                </button>
                <button type="button" class="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out">
                    Pure Veg
                </button>
                <button type="button" class="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:bg-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                    Delivery Time
                </button>
                <button type="button" class="flex bg-white hover:bg-gray-100 text-gray-400 px-6 py-2 rounded font-medium mx-3 border border-gray-300 transition duration-200 each-in-out">
                    Great Offers
                </button>
            </div>
        </div>
    )
}

export default FilterButtons
