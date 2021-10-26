import { useState, useEffect } from "react";
import axios from 'axios'
import "./Food.css";

const Food = ({ filters }) => {
  const [resDetail, setResDetail] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const fetchURL =
    "https://raw.githubusercontent.com/euhidaman/Fake_APIs/main/restaurant_details.json";

  useEffect(() => {
    getAllResDetails();
  }, []);

  useEffect(() => {
    setFilteredRes(
      resDetail.filter((res) => Number(res.hotelRating) >= filters.rating)
    );
  }, [resDetail, filters]);

  const getAllResDetails = () => {
    axios
      .get(fetchURL)
      .then((res) => {
        const allDetails = res.data.foodDetails;
        setResDetail(allDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="text-gray-400  body-font">
        <div className="container food-body px-10 py-10 md:mx-auto">
          <div className="flex flex-wrap md:-m-4 md:pl-6 foods-container">
            {filteredRes.map((food, index) => (
              <div
                key={index}
                className="w-full mb-4 p-2 lg:w-1/4 md:w-1/2 transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg food-container"
              >
                <div className="h-full flex flex-col items-center text-center food-wrapper">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-60 object-cover object-center mb-2 food-image" 
                    src={food.hotelUrl}
                  />
                  <div className="w-full ">
                    <div className="flex justify-between bg-transparent -mt-10">
                      <h2 className="text-white bg-blue-500 text-left ">&nbsp; {food.discount} &nbsp;</h2>
                      <h3 className="text-gray-900 text-sm text-left mr-2 bg-white bg-opacity-75 rounded-md">
                        &nbsp;  {food.time} &nbsp;
                      </h3>
                    </div>
                  </div>
                  
                  <div className="w-full">
                    <div 
                    className="flex justify-between hotel-info-wrapper">
                      <h3 className="text-gray-600 text-left text-lg ">{food.hotelName}</h3>
                      <h3 className="text-gray-50 text-left px-2  flex bg-green-500 rounded-md">
                        {food.hotelRating}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-0.5 mt-0.5 bg-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </h3>
                    </div>
                    <div className="w-full">
                      <div 
                      className="flex justify-between py-1 mb-3 hotel-type-price-container">
                        <p className="text-gray-400 text-left text-sm">{food.hotelType}</p>
                        <h3 className="text-gray-400 text-right text-sm">{food.price}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))};
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
