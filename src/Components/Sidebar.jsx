import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { FaMountainCity } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { toast } from "react-toastify";

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Tokenni o‘chirish
    toast.info("Tizimdan chiqdingiz!"); // Bildirishnoma chiqarish
    navigate("/login"); // Login sahifasiga yo‘naltirish
  };
  return (
    <div className="bg-blue-950 h-screen w-[230px] p-2">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 flex items-center text-[18px] gap-3 pl-4 rounded-lg m-2 transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-transparent text-white hover:bg-blue-700"
            }`
          }
        >
          <FaMountainCity className="text-2xl" />
          Cities
        </NavLink>

        <NavLink
          to="/cars"
          className={({ isActive }) =>
            `p-3 flex items-center text-[18px] gap-3 pl-4 rounded-lg m-2 transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-transparent text-white hover:bg-blue-700"
            }`
          }
        >
          <IoCarSportOutline className="text-2xl" />
          Cars
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            `p-3 flex items-center text-[18px] gap-3 pl-4 rounded-lg m-2 transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-transparent text-white hover:bg-blue-700"
            }`
          }
        >
          <BiSolidCategory className="text-2xl" />
          Categories
        </NavLink>
        <button
          onClick={handleLogout}
          className="px-4 py-2 ml-[20px] mt-[500px] bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Chiqish
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
