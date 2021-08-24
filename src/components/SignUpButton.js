import React from 'react';
import { useState } from 'react';
import './SignUpButton.css';

export default function SignUpButton() {

    const [showModal, setShowModal] = React.useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <>
            <button>
                <h1 className="signup" type="button"
                    onClick={() => setShowModal(true)} >
                    Sign Up
                </h1>
            </button>
            {showModal ? (
                <>
                    <div
                        className=" justify-center bg-opacity-70 bg-gray-900 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
                    >
                        <div className="relative  w-full rounded-3xl my-6 mx-auto max-w-sm">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-3xl">
                                    <h3 className="text-3xl font-semibold text-gray-600">
                                        Sign up
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
                                    <input className="w-full h-11 -mt-1 text-left text-lg px-4 border border-gray-300 focus:outline-none rounded-md focus:border-8 focus:border-green-800 "
                                        type="tel" placeholder="Full Name" value={name} onChange={event => setName(event.target.value)}
                                    />
                                    <input className="w-full h-11 mt-4 text-left text-lg px-4 border border-gray-300 focus:outline-none rounded-md focus:border-8 focus:border-green-800 "
                                        type="tel" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}
                                    />

                                    <div className="mt-4 py-4 space-y-4">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    type="checkbox"
                                                    className="h-6 w-6 border text-pink-200 border-gray-100 hover:border-pink-100 focus:outline-none rounded-md focus:border-2"
                                                />
                                                <label className="font-normal text-xs m-2 text-gray-500">
                                                    I agree to Zomato's <span className="text-pink-500 font-medium"> Terms of Service, Privacy Policy</span> and
                                                    <span className="text-pink-500 font-medium"> Content Policies</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className="w-full mt-3 bg-gray-300 font-sans
                                        hover:bg-red-500 mb-2
                                        text-lg py-2 rounded shadow text-white outline-none 
                                        focus:outline-none ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Create account
                                    </button>

                                    <h4>or</h4>

                                    <button
                                        className="w-full mt-3 font-sans border-gray-300
                                        text-lg py-2 rounded text-white border flex justify-center
                                        ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <svg className="mt-1 h-6 w-6" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00">
                                            </path>
                                            <path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8">
                                            </path>
                                            <path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446">
                                            </path>
                                            <path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336">
                                            </path>
                                        </svg>
                                        <p className="mx-3 text-gray-500 text-lg leading-relaxed">Continue with Google</p>
                                    </button>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-start mx-6 mb-2 rounded-3xl">
                                    <p className="mb-2 text-gray-800 text-lg leading-relaxed rounded-3xl">
                                        Already have an account? <span className="text-pink-700">Log in</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}
