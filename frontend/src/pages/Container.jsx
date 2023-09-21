import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ContainerTable from "../components/ContainerTable";
import services from "../services/containers";

function Container() {
  const [containers, setContainers] = useState([]);

  const fetchImages = () => {
    services
      .getContainers()
      .then((response) => {
        const containerLines = response.data.split("\n");

        containerLines.shift();
        containerLines.pop();

        const containersData = containerLines.map((line) => {
          const [
            containerId,
            image,
            command,
            created,
            time,
            ago,
            status,
            s, // leave a gap
            d, // leave a gap
            port,
            f, // leave a gap
            names,
          ] = line.split(/\s+/);
          return {
            containerId,
            image,
            command,
            created,
            time,
            ago,
            status,
            s,
            d,
            port,
            f,
            names,
          };
        });

        setContainers(containersData);
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
        <ContainerTable list={containers} />
      </SideBar>
    </>
  );
}

export default Container;
