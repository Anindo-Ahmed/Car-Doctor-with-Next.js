import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {

  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Services",
      path: "/services"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Contact",
      path: "/contact"
    },

  ]

  return (
    <div className=" bg-base-100 text-neutral-900">
      <div className="navbar container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {
            navItems.map((item) => (
              <Link className="font-semibold hover:text-primary duration-200" href={item.path} key={item.path}>{item.title}</Link>
            ))
          }
          </div>
        </div>
        <Link href={"/"}>
          <Image src="/assets/logo.svg" alt="logo" height={100} width={100}/>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex flex-row items-center gap-6">
          {
            navItems.map((item) => (
              <Link className="font-semibold hover:text-primary duration-200" href={item.path} key={item.path}>{item.title}</Link>
            ))
          }
        </div>
      </div>
      <div className="navbar-end">
      <div className="flex space-x-4 items-center">
      <LuShoppingBag className="text-xl hidden md:block "/>
      <IoSearch className="text-xl hidden md:block"/>
        <Link href={"/contact"}><button className="btn btn-outline btn-primary font-semibold text-base">Appointment</button></Link>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
