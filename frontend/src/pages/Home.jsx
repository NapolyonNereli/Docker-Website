import React from 'react'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

function Home() {
  return (
    <div>
        <NavBar />
        <SideBar>
            Home
        </SideBar>
    </div>
  )
}

export default Home