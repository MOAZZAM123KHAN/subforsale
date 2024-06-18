import React from "react";


const contactUs = () => {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4 bg-violet-500 text-white">Contact Us</h2>
        <form className="">
          <div className="mb-4 flex">

            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-4 flex">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-4 flex">

            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-md"
              required
              placeholder="Please enter your query"
            />
          </div>
          <a
            type="submit"
            className="rounded-full px-8 py-3 text-white bg-violet-500 hover:bg-violet-600" 
          >
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default contactUs;
