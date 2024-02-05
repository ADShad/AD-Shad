import React from "react";
import { TypeAnimation } from "react-type-animation";

const FeatureList = () => {
  return (
    <div className="">
      <div className="text-3xl lg:text-4xl font-bold my-0 mx-auto text-center w-[350px] text-[#00c5f9]  ">
        <TypeAnimation
          sequence={[
            " Digital Marketing",
            1000,
            " Fast Solutions",
            1000,
            "Software Developemnt",
            1000,
            "Realiable Solutions",
            1000,
            "Secure Platform",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default FeatureList;
