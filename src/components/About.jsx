import React from "react";
import FeatureList from "./FeatureList";

const About = () => {
  return (
    <div id="About" className=" text-center my-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#00c5f9] uppercase tracking-[0.8rem] text-lg font-semibold">
          About Us
        </p>
        <div className="flex flex-col lg:flex-row gap-10 lg:m-8  p-6 lg:p-1 ">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#333] lg:text-right">
              We craft solutions according to your needs with a strategic
              roadmap.
            </h2>
          </div>
          <div className="lg:w-1/2  mt-2">
            <p className="text-lg lg:text-xlfont-thin lg:mt-0 lg:text-left">
              AD-Shad is described as a fast-growing company specializing in
              designing and developing mobile applications and websites. Also in
              digital marketing, leveraging the unique strengths of their
              clients to create strategic roadmaps and attract the right
              customers.
            </p>
          </div>
        </div>
      </div>
      <FeatureList />
    </div>
  );
};

export default About;
