import React from "react";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import "./Navbar.css";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function Navbar() {
  const Component = () => {
    return (
      <Menu as="div" className="navbar relative mx-8 -mt-2 inline-block text-left ">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className=" inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
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
                className="right-0 mt-5 absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none login-sign-up-wrapper"
              >
                <div className="py-6 flex flex-col w-40 px-5 items-end space-y-2 rounded-md login-sign-up-container">
                  <Menu.Item>{<SignUpButton />}</Menu.Item>
                  <Menu.Item>{<LoginButton />}</Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  };

  return <Component />;
}

export default Navbar;
