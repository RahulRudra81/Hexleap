import React from 'react'

export default function Sports(){
  return (
    <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Sports</h1>
          <hr className="h-1 w-28 bg-blue-700"/>
        </div>
        <div className="flex justify-evenly gap-2 flex-wrap">
           {/* CARD START */}
          
          
              <div className="flex flex-col dark:bg-[#3b3e47] gap-5 w-80 shadow-2xl p-3">
                <img className="w-full h-full  object-cover" src="https://i.pinimg.com/736x/e9/c8/17/e9c8174bbb39fa5c257590a796ffed60.jpg"/>
                <span className="text-xl font-semibold">Sacramento River Cats</span>
                <div className="flex gap-20 dark:bg-[#292b32] bg-gray-200 text-sm py-2 px-4 ">
                  <div className="flex flex-col">
                    <span>Total Events</span>
                    <span className="font-bold">48 Events</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Sport</span>
                    <span className="font-bold">Baseball</span>
                  </div>
                </div>
              </div>

          
          {/* CARD END */}
           {/* CARD START 2*/}
          
          
              <div className="flex flex-col dark:bg-[#3b3e47] gap-5 w-80 shadow-2xl p-3">
                <img className="w-full object-cover h-full" src="https://pbs.twimg.com/media/D_swj2JXoAA8I26.jpg"/>
                <span className="text-xl font-semibold">Las Vegas Aviators</span>
                <div className="flex gap-20 bg-gray-200 dark:bg-[#292b32] text-sm py-2 px-4 ">
                  <div className="flex flex-col">
                    <span>Total Events</span>
                    <span className="font-bold">28 Events</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Sport</span>
                    <span className="font-bold">Baseball</span>
                  </div>
                </div>
              </div>

          
          {/* CARD END */}
      
           {/* CARD START 3*/}
          
          
              <div className="flex flex-col gap-5 dark:bg-[#3b3e47] w-80 shadow-2xl p-3">
                <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/69/67/a6/6967a64e146e558a8c88bfe27a789504.jpg"/>
                <span className="text-xl font-semibold">Sacramento River Cats</span>
                <div className="flex gap-20 bg-gray-200 dark:bg-[#292b32]  text-sm py-2 px-4 ">
                  <div className="flex flex-col">
                    <span>Total Events</span>
                    <span className="font-bold">15 Events</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Sport</span>
                    <span className="font-bold">Ice Hockey</span>
                  </div>
                </div>
              </div>

          
          {/* CARD END */}
               {/* CARD START 4*/}
          
          
               <div className="flex flex-col dark:bg-[#3b3e47] gap-5 w-80 shadow-2xl p-3">
                <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/eb/62/df/eb62df67e6cec17571db1d45c814bf44.jpg"/>
                <span className="text-xl font-semibold">Sacramento River Cats</span>
                <div className="flex gap-20 bg-gray-200 dark:bg-[#292b32] text-sm py-2 px-4 ">
                  <div className="flex flex-col">
                    <span>Total Events</span>
                    <span className="font-bold">48 Events</span>
                  </div>
                  <div className="flex flex-col">
                    <span>Sport</span>
                    <span className="font-bold">Baseball</span>
                  </div>
                </div>
              </div>

          
          {/* CARD END */}
           {/* CARD START ADVERTISMENT */}
          
          
              <div className="flex flex-col  gap-10 w-80 dark:bg-[#3b3e47] shadow-2xl p-3">
                <div className="relative">
                  <span className="bg-black text-white px-3 absolute right-0">Ad</span>
                  <img className="w-full " src="https://assets-global.website-files.com/63f6e52346a353ca1752970e/644fb7a6ef15c204711f5a70_20230501T1259-514f7ac5-f034-46bd-84af-2d87b3c74aff.jpeg"/>
                </div>
                <div className="flex flex-col p-2 gap-2">
                  <span className="text-3xl  font-semibold">Advertisment Title</span>
                  <span className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod dicta cumque magni totam et. Tempora autem architecto cum nostrum maxime, ex deserunt quo eveniet. Tempora quam voluptatum esse iure explicabo.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro ducimus laudantium rem nesciunt doloribus amet animi praesentium, laboriosam repellat dolore veniam culpa rerum tene</span>
                </div>
                
              </div>

          
          {/* CARD END */}
          
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-[#2c9cf0] text-white px-10 py-4 font-medium rounded-md hover:bg-[#106aae]">See More</button>
        </div>
      </div>
  )
}