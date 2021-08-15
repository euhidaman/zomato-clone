import { useState, useEffect } from "react";

const Food = () => {

    const [resDetail, setResDetail] = useState([]);

    useEffect(() => {
        const fetchFood = async () => {
            const res = await fetch("http://localhost:5000/foodDetails")
            const data = await res.json();
            setResDetail(data);
        }
        fetchFood();
    }, [])

    // Fetch Food Details
    console.table(resDetail);

    return (
        <div className="text-gray-400  body-font w-full">
            <div className="container px-10 py-10 mx-auto">
                <div className="flex flex-wrap -m-4 pl-6">

                    {resDetail.map((food) => (
                        <div className="mb-4 p-2 lg:w-1/4 md:w-1/2 transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-60 object-cover object-center mb-2" src={food.hotelUrl} />
                                <div className="w-full">
                                    <div className="flex justify-between">
                                        <h3 className="text-gray-600 text-left text-lg mb-3">{food.hotelName}</h3>

                                        <h3 className="text-gray-50 text-left px-2 mb-3 flex bg-green-500 rounded-md">
                                            {food.hotelRating}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-0.5 mt-0.5 bg-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </h3>

                                    </div>
                                    <p className="text-gray-400 text-left text-sm mb-3">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}

export default Food
