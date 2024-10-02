import React from "react";

import { services } from "../../lib/Service";
import ServiceCard from "../cards/ServiceCard";

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
    </div>
  );
};

export default Service;
