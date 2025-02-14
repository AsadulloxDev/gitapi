import React from 'react';
import { IoCarSportOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaMountainCity } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

function Sidebar() {
  return (
    <div className='bg-blue-950 h-screen w-[230px] p-2'>
      <div>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `p-3 flex items-center text-[18px] gap-3 pl-4 rounded-lg m-2 transition-all duration-300 ${
              isActive ? 'bg-blue-600 text-white' : 'bg-transparent text-white hover:bg-blue-700'
            }`
          }
        >
          <FaMountainCity className='text-2xl' />
          Cities
        </NavLink>

        <NavLink 
          to="/cars" 
          className={({ isActive }) => 
            `p-3 flex items-center text-[18px] gap-3 pl-4 rounded-lg m-2 transition-all duration-300 ${
              isActive ? 'bg-blue-600 text-white' : 'bg-transparent text-white hover:bg-blue-700'
            }`
          }
        >
          <IoCarSportOutline className='text-2xl' />
          Cars
        </NavLink>

        <NavLink 
          to="/categories" 
          className={({ isActive }) => 
            `p-3 flex items-center text-[18px] gap-3 pl-4 rounded-lg m-2 transition-all duration-300 ${
              isActive ? 'bg-blue-600 text-white' : 'bg-transparent text-white hover:bg-blue-700'
            }`
          }
        >
          <BiSolidCategory className='text-2xl' />
          Categories
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
