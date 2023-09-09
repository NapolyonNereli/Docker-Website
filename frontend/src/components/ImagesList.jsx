import React, { useState } from "react";
import Modal from "./Modal";
import services from "../services/searchImages";
import Anims from "./Anims";
import deneme from '../assets/anims/loading.json';
function ImagesList({ list }) {

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [icon, setIcon] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const downloadImage = async () => {
    setIcon(true)
    setOpen(false)
    const response = await services.downloadImages(image);
    if(response) {
      setIcon(false);
    }
  }

  const handleClick = (name) => {
    setOpen(true);
    setImage(name);
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1">
        {list.map((item, index) => (
          <div
            key={index}
            className="mb-5 duration-1000 hover:shadow-gray-500 hover:shadow-md flex  border-x-2 border-y-2 items-center justify-start hover:bg-slate-200 hover:duration-1000 h-24 rounded  bg-white"
          >
            <div className="text-2xl text-gray-400 dark:text-gray-500">
              <div className="">
                <h3 className="ml-5">{item.name}</h3>
              </div>
              <div className="border-solid border-gray-200 border-t-2"></div>
              <button
                onClick={() => handleClick(item.name)}
                className="bg-slate-600 p-2 ml-2 text-white rounded mt-2 text-lg hover:bg-slate-500 hover:duration-500 duration-500"
              >
                {" "}
                $ docker pull {item.name}
              </button>
            </div>
          </div>
        ))}
      </div>
      {icon && (<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20" ><Anims anim={deneme}/></div>)}
      {open && (<Modal buttonText='Download' onClose={handleClose} message={`Are you sure download "${image}" image?`} onConfirm={downloadImage} />)}
    </div>
  );
}

export default ImagesList;
