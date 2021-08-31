import { useState, useEffect } from "react";
import axios from 'axios'

const Food = () => {

    const [resDetail, setResDetail] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const fetchURL = "https://raw.githubusercontent.com/euhidaman/Fake_APIs/main/restaurant_details.json";

    useEffect(() => {
        getAllResDetails();
    }, [])

    const getAllResDetails = () => {
        axios.get(fetchURL)
            .then(res => {
                const allDetails = res.data.foodDetails;
                setResDetail(allDetails);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="text-gray-400  body-font" >
                <div className="container px-10 py-10 md:mx-auto">
                    <div className="flex flex-wrap -m-4 pl-6">

                        {resDetail.map((food) => (
                            <div className="mb-4 p-2 lg:w-1/4 md:w-1/2 transform transition duration-200 rounded-lg hover:scale-105 hover:shadow-lg"
                                onClick={() => setShowModal(true)}
                            >
                                <div className="h-full flex flex-col items-center text-center">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-full h-60 object-cover object-center mb-2" src={food.hotelUrl} />

                                    <div className="w-full ">
                                        <div className="flex justify-between bg-transparent -mt-10">
                                            <h2 className="text-white bg-blue-500 text-left ">&nbsp; {food.discount} &nbsp;</h2>
                                            <h3 className="text-gray-900 text-sm text-left mr-2 bg-white bg-opacity-75 rounded-md">
                                                &nbsp;  {food.time} &nbsp;
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex justify-between">
                                            <h3 className="text-gray-600 text-left text-lg ">{food.hotelName}</h3>
                                            <h3 className="text-gray-50 text-left px-2  flex bg-green-500 rounded-md">
                                                {food.hotelRating}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-0.5 mt-0.5 bg-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </h3>
                                        </div>

                                        <div className="w-full">
                                            <div className="flex justify-between py-1 mb-3">
                                                <p className="text-gray-400 text-left text-sm">{food.hotelType}</p>
                                                <h3 className="text-gray-400 text-right text-sm">{food.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </div >
            {/* Modal starts here */}
            {showModal ? (
                <>
                    <div
                        className="justify-center bg-opacity-70 bg-gray-900 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
                    >
                        <div className="relative w-auto mx-auto max-w-6xl rounded-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-solid border-blueGray-200 rounded-3xl">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-6 w-6" viewBox="0 0 20 20" fill="black">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}

                                {/* food_det */}
                                <section class="text-gray-600 body-font">
                                    <div class="container mx-auto flex px-5 items-center justify-center flex-col">
                                        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1500x1000/000/fff" />
                                        <div class="text-center lg:w-2/3 w-full">
                                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
                                            <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled.Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                                            <div class="flex justify-center">
                                                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* food_det */}
                                {/* <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                        won’t do anything. I was taught I could do everything.
                                    </p>
                                </div> */}
                                {/*footer*/}
                                {/* <div className="flex items-center rounded-3xl justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}

export default Food
