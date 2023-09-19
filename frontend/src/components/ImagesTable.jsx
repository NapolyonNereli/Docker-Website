import React, { useState } from "react";
import services from "../services/images";
import Modal from "./Modal";

function ImagesTable({ list }) {
  const [open, setOpen] = useState(false);
  const [imageId, setImageId] = useState("");
  const [image, setImage] = useState("");

  const deletedClick = async (imgName, imgId) => {
    setImageId(imgId);
    setOpen(true);
    setImage(imgName);
  };

  const runImage = async (imgId) => {
    const response = await services.runImage(imgId);
    console.log(response);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const response = await services.deletedImage(imageId);
    console.log(response);
  };

  console.log(imageId);

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
                  onClick={() => runImage(image.imageID)}
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
          message={`${image} emin misin silmeye`}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default ImagesTable;
