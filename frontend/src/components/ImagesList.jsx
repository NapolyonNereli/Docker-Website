import React from "react";

function ImagesList({ list }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1">
        {list.map((item, index) => (
          <div
            key={index}
            className="duration-1000 hover:shadow-gray-500 hover:shadow-md flex  border-x-2 border-y-2 items-center justify-start hover:bg-slate-200 hover:duration-1000 h-24 rounded  bg-white"
          >
            <div className="text-2xl text-gray-400 dark:text-gray-500">
              <div className="">
                <h3 className="ml-5">{item.name}</h3>
              </div>
              <div className="border-solid border-gray-200 border-t-2"></div>
              <button
                onClick={() => handleInstall(item.name)}
                className="bg-slate-600 p-2 ml-2 text-white rounded mt-2 text-lg hover:bg-slate-500 hover:duration-500 duration-500"
              >
                {" "}
                $ docker pull {item.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImagesList;
