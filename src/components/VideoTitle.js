import React from 'react';
// import { CiPlay1 } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>

    <h1 className='text-4xl font-bold'>{title}</h1>
    <p className='py-6 text-md w-1/4 '>{overview}</p>
    <div className='mx-0'>
        <button className=' text-black p-1 px-8 mx-1 bg-white text-lg  rounded-md  hover:bg-opacity-80'>▷ Play</button>
        <button className=' text-white p-1 px-6 bg-gray-600 text-lg bg-opacity-50 rounded-md  hover:bg-opacity-80'>ⓘ More Info</button>
    </div>

    </div>
  )
}

export default VideoTitle
