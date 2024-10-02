import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { TbPhoneCalling } from "react-icons/tb";
import { services } from "../../lib/Service";
import ServiceCard from "../cards/ServiceCard";
import Link from "next/link";

const Service = () => {
    console.log(services);

  return (
    <div className="lg:mt-28 mt-14 text-center">
      <h2 className="text-primary font-bold text-xl mb-5">Service</h2>
      <h1 className="text-neutral-900 font-bold md:text-5xl text-2xl">
        Our Service Area
      </h1>
      <p className="mt-5 text-neutral-400 lg:w-1/2 mx-auto">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 mt-14">
        {
            services.map((service) => (
                <ServiceCard service={service} key={service._id}/>
            ))
        }
      </div>
      <Link href={"/services"}><button className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white rounded-md md:px-6 px-3 md:py-2 md:text-lg mt-12">More Services</button></Link>
      <div className="flex lg:flex-row flex-col gap-10 bg-black h-[250px] lg:mt-32 justify-around items-center rounded-lg">
        <div className=" text-white flex items-center gap-4">
            <div><FaRegCalendarAlt className="text-4xl text-primary"/></div>
            <div>
                <p>We are open monday-friday</p>
                <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
            </div>
        </div>
        <div className="text-white flex items-center gap-4">
            <div><TbPhoneCalling className="text-4xl text-primary"/></div>
            <div>
                <p>Have a question?</p>
                <p className="text-2xl font-bold">+2546 251 2658</p>
            </div>
        </div>
        <div className=" text-white flex items-center gap-4">
            <div><HiLocationMarker className="text-4xl text-primary"/></div>
            <div>
                <p>Need a repair? our address</p>
                <p className="text-2xl font-bold">Liza Street, New York</p>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
