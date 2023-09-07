import React, { useState } from "react";
import { Link } from "react-router-dom";
import services from "../services/superUser";

function PanelNav() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    services.superUser(password);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ml-2 md:mr-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Home
                </span>
              </a>
            </div>
            <div className="">
              <ul className="flex justify-between">
                <li className="mr-2">
                  <Link href="#" role="menuitem">
                    <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                      Settings
                    </button>
                  </Link>
                </li>
                <li className="mr-2">
                  <button
                    onClick={handleClick}
                    className="py-2 px-4 text-sm hover:bg-green-600 hover:duration-500 duration-500 bg-green-500 text-white"
                  >
                    Root
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <form onSubmit={handleSubmit}>
              <p className="mb-4">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-200 dark:border-slate-200 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="sudo password"
                  required
                />
              </p>
              <div className="flex justify-between">
                <button
                  onClick={handleClose}
                  className="mr-2 px-4 py-2 bg-gray-400 rounded text-white hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-red-500 rounded text-white hover:bg-red-600">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default PanelNav;
