import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Container from './pages/Container';
import Images from './pages/Images';
import Search from './pages/Search';
import CreateDocker from './pages/CreateDocker';
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element ={<Home />} />
        <Route path='container' element={<Container />} />
        <Route path="images" element={<Images />} />
        <Route path='search' element={<Search />} />
        <Route path='create-dockerfile' element={<CreateDocker />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
