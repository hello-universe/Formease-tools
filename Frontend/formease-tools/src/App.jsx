import React from 'react'
import Home from './Components/Home'
import {Routes, Route, Link} from 'react-router-dom'
import CompressImage from './Components/CompressImage'
import SingleTool from './Components/SingleTool'
import Resize from './Components/Resize'
import CropImage from './Components/CropImage'
import ChangeImageFormat from './Components/ChangeImageFormat'

function App() {
  return (
    <div className='w-[95%] mx-auto'>
      <header className='flex justify-between items-center py-3'>
        <h1 className='flex gap-2 text-4xl font-bold text-[#003049]'>FormEase Tools <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#003049"><path d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z"/></svg></span></h1>
        <div className="info flex justify-between gap-8 text-[#003049] text-xl font-semibold">
          <a className="how-to-use" href='#'>
            How to use?
          </a>
          <a className="about" href='#'>
            About
          </a>
        </div>
      </header>
      <div className="line w-full h-[2px] bg-black shadow-[0_4px_10px_rgba(0,0,0,0.8)] mb-10"></div>
      <section className='flex gap-20'>
        <div className="tools">
          <nav>
            <ul className='flex flex-col gap-2 h-80'>
              <li> <Link to='/'> <SingleTool name={'Home'} /> </Link> </li>
              <li> <Link to='/compress_image'> <SingleTool name={'Compress Image'} /></Link> </li>
              <li> <Link to='/resize_image'><SingleTool name={'Resize(Change Dimensions)'} /></Link> </li>
              <li> <Link to='/crop_image'><SingleTool name={'Crop Image'} /></Link> </li>
              <li> <Link to='/change_format'><SingleTool name={'Change Image Format'} /></Link> </li>
            </ul>
          </nav>
        </div>
        <div className="area h-[22rem] grow">
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='compress_image' Component={CompressImage} />
            <Route path='resize_image' Component={Resize} />
            <Route path='crop_image' Component={CropImage} />
            <Route path='change_format' Component={ChangeImageFormat} />
          </Routes>
        </div>
      </section>
    </div>
  )
}

export default App