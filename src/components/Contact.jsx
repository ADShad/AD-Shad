const Contact = () => {
  return (
    <div id="Contact" className=" py-8 lg:py-16 w-full">
      <div className="container mx-auto">
        <p className="text-[#00c5f9] uppercase tracking-[0.8rem] text-sm font-semibold mb-4 text-center">
          Need a solution?
        </p>
        <p className="text-gray-700 mb-8 text-center p-2 font-bold text-3xl lg:text-4xl tracking-wider">
          Contact Us
        </p>

        <div className="max-w-lg lg:my-0 lg:mx-auto bg-gray-200 rounded-md p-7 m-4">
          <form
            className="w-full"
            name="contact"
            method="POST"
            action="/"
            netlify
          >
            {/* -------------name---------- */}
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2 tracking-widest"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  name="name" // Add name attribute
                  placeholder="We would love to connect with you!"
                />
              </div>
            </div>
            {/* -------------email---------- */}
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2 tracking-widest"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email" // Add name attribute
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            {/* -------------phone---------- */}
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2 tracking-widest"
                  htmlFor="contactNumber"
                >
                  Contact Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="contactNumber"
                  type="tel"
                  name="contactNumber" // Add name attribute
                  placeholder="Enter your Contact Number"
                />
              </div>
            </div>
            <div className="w-full mx-auto my-0 flex justify-center">
              <button
                className="bg-[#00c5f9] px-10 py-3 rounded-md text-gray-200 tracking-wider"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
