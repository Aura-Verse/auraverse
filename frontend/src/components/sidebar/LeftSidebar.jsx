 import React from 'react'
import { FiHome } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { BiLogOut, BiSolidMessageSquareDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BiSolidNotification } from "react-icons/bi";
const SidebarItems = [
  {icon:<FiHome />,text: "Home"},
  {icon:<IoSearchSharp />,text: "Search"},
  {icon:<MdOutlineAddAPhoto />,text: "New Post"},
  {icon:<BiSolidMessageSquareDetail />,text: "Aura Connect"},
  {icon:<BiSolidNotification />,text: "Notification"},
  {icon:<CgProfile />,text: "Profile"},
  {icon:<BiLogOut />, text: "Logout"}

]

const LeftSidebar = () => {
  return (
    <div className=' top-0 z-10 left-0 px-4 border-r border-slate-500 w-[16%] h-screen'>
      <div className='flex flex-col'>
        <h1 className='text-4xl mt-8 mb-8 text-indigo-500 font-extrabold '>AURAVERSE</h1>
        <div>
        {
        SidebarItems.map((item,index)=>{
          return (
            <div key={index} className='flex items-center px-4 gap-4 relative text-2xl mt-8 font-semibold bg-[#1e81b0] rounded-xl py-4 hover:shadow-2xl cursor-pointer hover:rounded-3xl transition-all duration-500 ease-in-out'>
              {item.icon}
              <span>{item.text}</span>
            </div>
          )
        })
      }
        </div>
      
      </div>
     
    </div>
  )
}

export default LeftSidebar