import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ImagesTable from "../components/ImagesTable";
import services from "../services/images";
function Images() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    services
      .getImages()
      .then((response) => {
        const containerLines = response.data.split("\n");

        containerLines.shift();
        containerLines.pop();

        const imagesData = containerLines.map((line) => {
          const [name, tag, imageID, created, time, ago, size] =
            line.split(/\s+/);
          return { name, tag, imageID, created, time, ago, size };
        });

        setImages(imagesData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <NavBar />
      <SideBar>
        <ImagesTable list={images} />
      </SideBar>
    </>
  );
}

export default Images;
