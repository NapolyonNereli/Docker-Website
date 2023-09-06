import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
function Search() {
  
  const submitSearch = () => {}

  return (
    <>
      <NavBar />
      <div className="sm:ml-64">
        <div className="mt-14">
          <form className="flex" onSubmit={submitSearch}>
            <input
              // value={search}
              //onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Image"
              className="duration-1000 bg-gray-50 w-full text-grey-800 focus:duration-1000 focus:bg-white outline-none focus:outline-none p-2 text-xl lg:text-2xl"
            />
            <button
              type="submit"
              className="py-2 px-4 hover:duration-500 duration-500 bg-gray-400 hover:bg-gray-500 rounded text-white"
            >
              Search
            </button>
          </form>
        </div>
        </div>
      <SideBar>
      
      </SideBar>
    </>
  );
}

export default Search;
