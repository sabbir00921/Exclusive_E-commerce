import React, { useEffect, useRef, useState } from "react";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";
import { FiShoppingBag } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { LuUser } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router";

const Navbar = () => {
  const navItems = [
    { id: 1, item: "Home" },
    { id: 2, item: "Contact" },
    { id: 3, item: "About" },
    { id: 4, item: "SignUp" },
  ];

  const [account, setAccount] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAccount(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="pt-10 pb-4 border-b-[1px] border-b-text-black-gray">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="basis-1/4">
            <h1 className="text-2xl font-bold font-inter text-text-black-main hover:text-black-363738 cursor-pointer">
              Exclusive
            </h1>
          </div>

          {/* Nav Menu */}
          <div className="basis-2/4 flex justify-center">
            <ul className="flex items-center gap-x-[48px]">
              {navItems.map((nav) => (
                <li key={nav.id} className="menuUnderlineBar">
                  <NavLink
                    to={`/${nav.item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "text-black text-[17px] font-normal font-poppins"
                        : "text-gray-500 text-[17px] font-normal font-poppins"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Icons */}
          <div className="basis-1/4 relative flex items-center justify-between">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                className="py-2 px-8 bg-gray-200 text-black rounded"
                placeholder="What are you looking for?"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-3 text-xl">
                <FcSearch />
              </span>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-x-[20px]">
              <span className="text-black cursor-pointer text-2xl">
                <FaRegHeart />
              </span>
              <span className="text-black cursor-pointer text-2xl relative amount">
                <GiShoppingCart />
              </span>

              {/* User Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <span
                  className="text-black cursor-pointer text-2xl"
                  onClick={() => setAccount((prev) => !prev)}
                >
                  <FaUserLarge className="text-white bg-red rounded-full p-[4px] text-2xl" />
                </span>

                {account && (
                  <div className="absolute flex z-30 flex-col w-[250px] gap-6 right-0 top-14 bg-[rgba(1,1,6,0.8)]  py-3 rounded-sm shadow-lg">
                    <div className="flex items-center gap-x- cursor-pointer text-white  hover:text-black transition-all px-4 hover:py-2 hover:bg-[rgba(231,231,235,0.9)]">
                      <LuUser className=" text-2xl" />
                      <h3 className=" text-lg font-poppins">
                        Manage My Account
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-3 cursor-pointer text-white  hover:text-black transition-all px-4 hover:py-2 hover:bg-[rgba(231,231,235,0.9)]">
                      <FiShoppingBag className=" text-2xl" />
                      <h3 className="text-lg font-poppins">My Order</h3>
                    </div>
                    <div className="flex items-center gap-x-3 cursor-pointer text-white  hover:text-black transition-all px-4 hover:py-2 hover:bg-[rgba(231,231,235,0.9)]">
                      <MdOutlineCancel className=" text-2xl" />
                      <h3 className=" text-lg font-poppins">My Cancellation</h3>
                    </div>
                    <div className="flex items-center gap-x-3 cursor-pointer text-white  hover:text-black transition-all px-4 hover:py-2 hover:bg-[rgba(231,231,235,0.9)]">
                      <FaRegStar className=" text-2xl" />
                      <h3 className=" text-lg font-poppins">Manage Reviews</h3>
                    </div>
                    <div className="flex items-center gap-x-3 cursor-pointer text-white  hover:text-black transition-all px-4 hover:py-2 hover:bg-[rgba(231,231,235,0.9)]">
                      <TbLogout2 className=" text-2xl" />
                      <h3 className=" text-lg font-poppins">Logout</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
