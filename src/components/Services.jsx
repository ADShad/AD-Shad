import React from "react";
import { servicesData } from "../store/services-store";

const Services = () => {
  return (
    <>
      <div id="Services" className="bg-gray-100 py-8 lg:py-16 w-full">
        <div className="container mx-auto">
          <p className="text-[#00c5f9] uppercase tracking-[0.8rem] text-lg font-semibold mb-4 text-center">
            Our Services
          </p>
          <p className="text-gray-700 mb-8 text-center p-2 lg:text-xl">
            AD-Shad offers a range of services to help our clients, including
            Design, Development, and Maintenance of Mobile and Web applications,
            Facebook Ads, Google Ads, Linkedin Ads, SMM, and SEO.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8  gap-2">
            {servicesData.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl overflow-hidden shadow-md pt-5 lg:m-1 m-5 "
              >
                <img
                  className="w-full h-24 object-contain object-center"
                  src={item.image}
                  alt="Service Image"
                />
                <div className="p-6">
                  <h2 className="font-semibold text-xl text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
