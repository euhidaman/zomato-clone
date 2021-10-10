import React, { useEffect, useState } from "react";
import axios from "axios";

function Find({ searchQuery }) {
  const [results, setResults] = useState([]);

  const fetchURL =
    "https://raw.githubusercontent.com/euhidaman/Fake_APIs/main/restaurant_details.json";

  const getAllDetails = async () => {
    try {
      const allDetails = await axios.get(fetchURL);
      const { foodDetails } = allDetails.data;
      setResults(foodDetails);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllDetails();
    // return () => setResults([]);
  }, [searchQuery]);

  return (
    <>
      {results
        .filter((val) => val.hotelName.toLowerCase().includes(searchQuery))
        .map((val, index) => (
          <div className="flex  " key={index}>
            <div className="flex space-x-6 ">
              <img
                src={val.hotelUrl}
                alt="food-pic"
                className=" w-24 h-24 mb-5 rounded-lg"
              />
              <div>
                <p className=" text-base font-semibold ">{val.hotelName}</p>
                <div className="flex">
                  <div className="flex items-center font-bold text-sm py-1 w-max px-3 mt-1 rounded-md text-white bg-green-500">
                    {val.hotelRating}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-0.5 mt-0.5 bg-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p className="font-light mt-1">{val.hotelType}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Find;
