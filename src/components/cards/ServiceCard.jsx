import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
  return (
    <div>
      <div className="card card-compact bg-base-100 lg:w-96 shadow-xl">
        <figure>
          <Image src={img} alt={title} height={200} width={350}></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-neutral-800 text-2xl font-bold">
            {title}
          </h2>
          <div className="flex items-center">
            <p className="text-primary text-start text-xl font-semibold">
              Price : <span>${price}</span>
            </p>
            <button className="btn btn-primary rounded-full">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
