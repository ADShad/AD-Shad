import { Link } from "react-scroll";
import hero from "../assets/hero-gif.gif";

const Home = () => {
  return (
    <>
      <div
        id="Home"
        className=" bg-gray-100 flex flex-col justify-center items-center  px-6 pt-8 lg:pt-2 pb-16  md:px-12 lg:text-left"
      >
        <div className="w-full mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="flex flex-col md:flex-row items-center lg:ml-20 gap-12 lg:mt-36">
            <div className="mt-14 lg:mt-0 text-center md:text-left">
              <h1 className="mt-2 mb-2 text-4xl font-bold tracking-tight md:text-6xl xl:text-[59px] ">
                We Build Website/App/CRM That Builds Your <br />
                <span className="text-[#00c5f9]">Business</span>
              </h1>
              <p className="text-lg mb-3 leading-6 ">
                We Are An Expert in Software Development & Digital Marketing And
                Use The Best Technologies And Platforms To Deliver High-Quality
                Products.
              </p>
              <Link to={"Contact"} spy={true} smooth={true} duration={1000}>
                <button className="bg-[#00c5f9] text-[#fdfbfb] py-2 px-4 rounded-md">
                  Schedule Meet
                </button>
              </Link>
            </div>
            <div>
              <img src={hero} className="w-[95rem]" alt="photo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
