import React, { useEffect, useState } from "react";
import services from "../services/images";
import Modal from "./Modal";

function ImagesTable({ list }) {
  const [imageId, setImageId] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [port, setPort] = useState("4000:4000");
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  //functions
  const deletedClick = (imgName, imgId) => {
    setImageId(imgId);
    setOpen(true);
    setImage(imgName);
  };

  const clickRun = (imgId) => {
    setImageId(imgId);
    setModal(true);
  };

  const runImage = async () => {
    await services.runImage(name, port, imageId);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setModal(false);
  };

  const handleDelete = async () => {
    const response = await services.deletedImage(imageId);
    console.log(response);
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
            <th scope="col" className="px-6 py-3">
              DELETE
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
                  onClick={() => clickRun(image.imageID)}
                  className="px-4 rounded-md text-white py-2 bg-green-600 duration-500 hover:duration-500 hover:bg-green-700"
                >
                  Run
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => deletedClick(image.name, image.imageID)}
                  className="px-4 rounded-md text-white py-2 bg-red-600 hover:bg-red-700 hover:duration-500 duration-500"
                >
                  Deleted
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {open && (
        <Modal
          onClose={handleClose}
          buttonText="Deleted"
          message={`Are you sure you want to remove this ${image}?`}
          onConfirm={handleDelete}
        />
      )}
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <div className="text-center mb-4">
              <div className="grid grid-cols-1 space-y-2 mt-2">
                <label className="m-auto grid grid-cols-1 space-y-2 text-black">
                  Container Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="m-auto w-3/4 text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="container_name"
                />
              </div>
              <div className="grid grid-cols-1 space-y-2 mt-2">
                <label className="m-auto grid grid-cols-1 space-y-2 text-black">
                  Port Number
                </label>
                <input
                  value={port}
                  onChange={(e) => setPort(e.target.value)}
                  className="m-auto w-3/4 text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="4000:4000"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleClose}
                className="mr-2 px-4 py-2 bg-gray-400 rounded text-white hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={runImage}
                className="px-4 py-2 bg-green-500 rounded text-white hover:bg-green-600"
              >
                RUN
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagesTable;
