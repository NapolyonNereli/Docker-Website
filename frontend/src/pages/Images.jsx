import React, { useEffect } from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import ImagesTable from '../components/ImagesTable';
import services from '../services/images';
function Images() {
  const fetchImages = () => {
    services.getImages().then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }    

  useEffect(() => {
    fetchImages();
  }, [])

  return (
    <>
      <NavBar />
      <SideBar>
        <ImagesTable />
      </SideBar>
    </>
  )
}

export default Images