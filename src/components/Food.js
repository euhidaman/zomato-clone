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
                    {/* image-first */}

                    {resDetail.map((food) => (
                        <div className="mt-2 p-2 lg:w-1/4 md:w-1/2 transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-2xl">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-60 object-cover object-center mb-2" src={food.hotelUrl} />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-white">Alper Kamu</h2>
                                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                    <p className="">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Food
