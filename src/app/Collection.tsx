import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Collection() {
  return (
    <div><div className="mt-20 w-fit flex flex-wrap flex-col gap-10 items-center p-20 dark:bg-gradient-to-b from-[#19252a] to-[#211b2c]">
    <div className="text-6xl flex   justify-center font-bold">
      Collection Spotlight
    </div>
    <div className="lg:flex lg:flex-col  items-center justify-center ">
      <span>Discover extraordinary moments with our Spotlight Collection metatickets-exclusive access to premium events for an unforgettable experience.</span>
      <span>  Grab yours today!</span>
    </div>

    {/* MULTIPLE CARDS SLIDER */}
    <div className="w-full flex-wrap  flex justify-evenly gap-16 items-center ">
      <div className="sm:max-md:hidden "><MdKeyboardArrowLeft className="text-6xl hover:text-white hover:bg-[#106aae] text-[#2c9cf0] border-2 border-[#2c9cf0]"/></div>
      <div className="flex flex-wrap justify-evenly gap-8">
        {/* CARD START */}
      
      
        <div className="flex  flex-col dark:bg-[#3b3e47] gap-5 w-80 shadow-2xl p-3">
            <img className="w-full h-full  object-cover" src="https://i.pinimg.com/736x/b0/bc/0a/b0bc0a36fddaeb37705eeda957db7819.jpg"/>
            <div>
            <div className="flex w-full gap-2">
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>

            </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-semibold">Las Vegas Aviators</span>
              <span className="">OCT 15 | SUN | 4:30 PM</span>
              <div className="flex flex-col items-center">
                <span className="text-gray-500">Las Vegas Ballpark,Las Vegas,</span>
                <span className="text-gray-500">Nevada</span>
              </div>
              <button className="bg-black hover:bg-gray-800  text-white py-3 px-9 mt-3">Take Flight Collection</button>
            </div>
        </div>
        <div className="flex flex-col dark:bg-[#3b3e47] gap-5 w-80 shadow-2xl p-3">
            <img className="w-full h-full  object-cover" src="https://cdn1.sportngin.com/attachments/document/4db7-1569966/IMG_4387.JPG"/>
            <div>
            <div className="flex w-full gap-2">
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>

            </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-semibold">Sacramento River Cats</span>
              <span className="">OCT 15 | SUN | 4:30 PM</span>
              <div className="flex flex-col items-center">
                <span className="text-gray-500">Sutter Health Park,Sacramento</span>
                <span className="text-gray-500">California</span>
              </div>
              <button className="bg-black hover:bg-gray-800 text-white py-3 px-9 mt-3">Take Flight Collection</button>
            </div>
        </div>
        <div className="flex flex-col dark:bg-[#3b3e47] gap-5 w-80 shadow-2xl p-3">
            <img className="w-full h-full  object-cover" src="https://e0.pxfuel.com/wallpapers/618/700/desktop-wallpaper-mlb-iphone-blue-baseball-thumbnail.jpg"/>
            <div>
            <div className="flex w-full gap-2">
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>
              <div className="border-b border-solid border-gray-500 h-1 flex-grow"></div>

            </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-semibold">Las Vegas Aviators</span>
              <span className="">OCT 15 | SUN | 4:30 PM</span>
              <div className="flex flex-col items-center">
                <span className="text-gray-500">Las Vegas Ballpark,Las Vegas,</span>
                <span className="text-gray-500">Nevada</span>
              </div>
              <button className="bg-black hover:bg-gray-800 text-white py-3 px-9 mt-3">Take Flight Collection</button>
            </div>
        </div>

      
      {/* CARD END */}
      </div>
      <div><MdKeyboardArrowRight className="text-6xl hover:text-white hover:bg-[#106aae] text-[#2c9cf0] border-2 border-[#2c9cf0]"/></div>
    </div>

    
  </div></div>
  )
}
