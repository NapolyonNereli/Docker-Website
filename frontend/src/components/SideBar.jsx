import React from "react";
import { BsFillBoxFill, BsFillCloudFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { RiFileSearchFill } from "react-icons/ri";
import { FaOctopusDeploy } from "react-icons/fa";
import { VscNewFile } from "react-icons/vsc";
import { Link } from "react-router-dom";

function SideBar(props) {
  const style = {
    home: `${
      props.selected === "home" ? "bg-gray-700" : ""
    } w-full text-start flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`,
    container: `${
      props.selected === "container" ? "bg-gray-700" : ""
    } w-full text-start flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`,
    images: `${
      props.selected === "images" ? "bg-gray-700" : ""
    } w-full text-start flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`,
    search: `${
      props.selected === "search" ? "bg-gray-700" : ""
    } w-full text-start flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`,
    dockerfile: `${
      props.selected === "dockerfile" ? "bg-gray-700" : ""
    } w-full text-start flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`,
    deploy: `${
      props.selected === "deploy" ? "bg-gray-700" : ""
    } w-full text-start flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`,
  };
  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/home" className={style.home}>
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <AiFillHome size={23} />
                </svg>
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/container" className={style.container}>
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <BsFillBoxFill />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Container</span>
              </Link>
            </li>
            <li>
              <Link
                to="/images"
                className={style.images}
              >
                <svg
                  className="flex-shrink-0  w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <BsFillCloudFill size={20} />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Images</span>
              </Link>
            </li>
            <li>
              <Link
                to="/search"
    className={style.search}
>
                <svg
                  className="flex-shrink-0  w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <RiFileSearchFill size={22} />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Search</span>
              </Link>
            </li>
            <li>
              <Link
                to="/create-dockerfile"
    className={style.dockerfile}
>
                <svg
                  className="flex-shrink-0  w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <VscNewFile size={22} />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Create Dockerfile
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/deploy-page"
    className={style.deploy}
>
                <svg
                  className="flex-shrink-0  w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <FaOctopusDeploy size={20} />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Deploy</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-none rounded-lg dark:border-gray-700 mt-14"></div>
        {props.children}
      </div>
    </>
  );
}

export default SideBar;
