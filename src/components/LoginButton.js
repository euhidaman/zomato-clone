import React from "react";
import './LoginButton.css';


export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="login"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Login
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center bg-opacity-70 bg-gray-900 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
                    >
                        <div className="relative  w-auto rounded-3xl my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-3xl">
                                    <h3 className="text-3xl font-semibold text-gray-600">
                                        Log in
                                    </h3>
                                    <button
                                        className="p-1 -mt-2"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-6 w-6 mt-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <input className="w-full h-11 -mt-1 text-lg border border-gray-300 focus:outline-none rounded-md focus:border-8 focus:border-green-800 "
                                        type="text" placeholder="Phone number"
                                    />
                                    <button
                                        className="w-full mt-3 bg-gray-300 font-sans
                                        text-lg py-2 rounded shadow text-white outline-none 
                                        focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Send OTP
                                    </button>
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">

                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves!
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6  rounded-3xl">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-green-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}