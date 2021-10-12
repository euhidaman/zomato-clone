import { React } from 'react';
import './Header.css';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = props => {

    const [location, setLocation] = props.functions;

    return (
        <div>
            <div className="flex justify-start mb-4">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato" className="w-full px-2 md:w-1/2" />
            </div>
            <div className="flex flex-col space-y-8 md:space-y-0 md:items-center md:justify-evenly md:flex-row">
                <Menu as="div" className="relative inline-block mx-8 -mt-2 text-left md:w-100">
                 {({ open }) => (
                    <>
                        <div>
                            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm shadow-md md : lg: hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" viewBox="0 0 20 20" fill="#F57082" >
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                                <input className="px-6 py-2 leading-tight lg : w-50 text-black-700 focus:outline-none"
                                    id="search" type="text" placeholder={location}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </Menu.Button>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                static
                                className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button onClick={() => setLocation("Bengaluru")}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-20 py-3 text-sm'
                                                )}
                                            >
                                                Bengaluru
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button onClick={() => setLocation("Kolkata")}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-20 py-3 text-sm'
                                                )}
                                            >
                                                Kolkata
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button onClick={() => setLocation("Delhi NCR")}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-20 py-3 text-sm'
                                                )}
                                            >
                                                Delhi NCR
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button onClick={() => setLocation("Mumbai")}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-20 py-3 text-sm'
                                                )}
                                            >
                                                Mumbai
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </>
                )}
            </Menu>
             <div className="inline-flex items-center max-w-6xl ml-5 -mt-3 border border-gray-300 rounded-md shadow-md md:w-100">
                <input className="px-6 py-4 leading-tight text-gray-700 w-96 focus:outline-none"
                    id="search" type="text" placeholder="Search for restaurant, cuisine or a dish"
                />
                <div className="p-3">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5" fill="none" viewBox="0 0 24 24" stroke="#828282">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <LoginButton />
            <SignUpButton />
            </div>
            
        </div>
    )
}

export default Header

{/* <div className="relative p-12 md:flex-col md:pb-12 lg :" id = "header">
            <img className = "h-40 pb-10 lg: w-45 md : w-100 " src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato" />

            {/* Dropdown start */}
            // <Menu as="div" className="relative inline-block mx-8 -mt-2 text-left md:w-100">
            //     {({ open }) => (
            //         <>
            //             <div>
            //                 <Menu.Button className="inline-flex justify-center w-full px-4 py-2 mb-12 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm shadow-md md : lg: hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
            //                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" viewBox="0 0 20 20" fill="#F57082" >
            //                         <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            //                     </svg>
            //                     <input className="px-6 py-2 leading-tight lg : w-50 text-black-700 focus:outline-none"
            //                         id="search" type="text" placeholder={location}
            //                     />
            //                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
            //                         <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            //                     </svg>
            //                 </Menu.Button>
            //             </div>

            //             <Transition
            //                 show={open}
            //                 as={Fragment}
            //                 enter="transition ease-out duration-100"
            //                 enterFrom="transform opacity-0 scale-95"
            //                 enterTo="transform opacity-100 scale-100"
            //                 leave="transition ease-in duration-75"
            //                 leaveFrom="transform opacity-100 scale-100"
            //                 leaveTo="transform opacity-0 scale-95"
            //             >
            //                 <Menu.Items
            //                     static
            //                     className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            //                 >
            //                     <div className="py-1">
            //                         <Menu.Item>
            //                             {({ active }) => (
            //                                 <button onClick={() => setLocation("Bengaluru")}
            //                                     className={classNames(
            //                                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            //                                         'block px-20 py-3 text-sm'
            //                                     )}
            //                                 >
            //                                     Bengaluru
            //                                 </button>
            //                             )}
            //                         </Menu.Item>
            //                         <Menu.Item>
            //                             {({ active }) => (
            //                                 <button onClick={() => setLocation("Kolkata")}
            //                                     className={classNames(
            //                                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            //                                         'block px-20 py-3 text-sm'
            //                                     )}
            //                                 >
            //                                     Kolkata
            //                                 </button>
            //                             )}
            //                         </Menu.Item>
            //                         <Menu.Item>
            //                             {({ active }) => (
            //                                 <button onClick={() => setLocation("Delhi NCR")}
            //                                     className={classNames(
            //                                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            //                                         'block px-20 py-3 text-sm'
            //                                     )}
            //                                 >
            //                                     Delhi NCR
            //                                 </button>
            //                             )}
            //                         </Menu.Item>
            //                         <Menu.Item>
            //                             {({ active }) => (
            //                                 <button onClick={() => setLocation("Mumbai")}
            //                                     className={classNames(
            //                                         active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            //                                         'block px-20 py-3 text-sm'
            //                                     )}
            //                                 >
            //                                     Mumbai
            //                                 </button>
            //                             )}
            //                         </Menu.Item>
            //                     </div>
            //                 </Menu.Items>
            //             </Transition>
            //         </>
            //     )}
            // </Menu>
            {/* Dropdown end */}

        //     <div className="inline-flex items-center max-w-6xl ml-5 -mt-3 border border-gray-300 rounded-md shadow-md md:w-100">
        //         <input className="px-6 py-4 leading-tight text-gray-700 w-96 focus:outline-none"
        //             id="search" type="text" placeholder="Search for restaurant, cuisine or a dish"
        //         />
        //         <div className="p-3">
        //             <button>
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5" fill="none" viewBox="0 0 24 24" stroke="#828282">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        //                 </svg>
        //             </button>
        //         </div>
        //     </div>


        //     <LoginButton />
        //     <SignUpButton />

        // </div>