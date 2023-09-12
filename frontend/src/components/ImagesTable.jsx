import React from "react";

function ImagesTable({ list }) {
  const handleButton = (e) => {
    console.log("button click", e);
  };

  return (
    <div className="rounded-lg relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              REPOSITORY
            </th>
            <th scope="col" className="px-6 py-3">
              TAG
            </th>
            <th scope="col" className="px-6 py-3">
              SIZE
            </th>
            <th scope="col" className="px-6 py-3">
              IMAGE ID
            </th>
            <th scope="col" className="px-6 py-3">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((image, index) => (
            <tr
              key={index}
              className={`bg-white border-b ${
                index % 2 == 0 ? "dark:bg-gray-800" : "dark:bg-gray-700"
              } dark:border-gray-700`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {image.name}
              </th>
              <td className="px-6 py-4">{image.tag}</td>
              <td className="px-6 py-4">{image.size}</td>
              <td className="px-6 py-4">{image.imageID}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleButton(image.imageID)}
                  className="px-4 rounded-md text-white py-2 bg-green-600 duration-500 hover:duration-500 hover:bg-green-700"
                >
                  Start
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImagesTable;
