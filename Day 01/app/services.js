import React from "react";
import { FaLink, FaChartBar, FaBullhorn, FaEnvelope } from "react-icons/fa";

const services = () => {
  return (
    <section className="py-20 overflow-x-hodden">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="text-black mt-4 text-2xl">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Service Card 1 */}
        <div className="px-6 py-20 bg-white text-gray-900 rounded-lg shadow-lg hover:bg-purple-800 hover:text-white border-4 text-center">
          <FaLink size={40} className="mb-12 mx-auto" />
          <h3 className="text-3xl font-bold mb-2">Link Building</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-md">
            Read More →
          </button>
        </div>

        {/* Service Card 2 */}
        <div className="px-6 py-20 bg-white text-gray-900 rounded-lg shadow-lg hover:bg-purple-800 hover:text-white border-4 text-center">
          <FaChartBar size={40} className="mb-12 mx-auto" />
          <h3 className="text-3xl font-bold mb-2">On page SEO</h3>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-md">
            Read More →
          </button>
        </div>

        {/* Service Card 3 */}
        <div className="px-6 py-20 bg-white text-gray-900 rounded-lg shadow-lg hover:bg-purple-800 hover:text-white border-4 text-center">
          <FaBullhorn size={40} className="mb-12 mx-auto" />
          <h3 className="text-3xl font-bold mb-2">Online Marketing</h3>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-md">
            Read More →
          </button>
        </div>

        {/* Service Card 4 */}
        <div className="px-6 py-20 bg-white text-gray-900 rounded-lg shadow-lg hover:bg-purple-500 hover:text-white border-4 text-center">
          <FaEnvelope size={40} className="mb-12 mx-auto" />
          <h3 className="text-3xl font-bold mb-2">Email Marketing</h3>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="mt-4 inline-block bg-white text-black px-4 py-2 rounded-md">
            Read More →
          </button>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="mt-2 w-[15%] px-7 py-5 bg-purple-600 rounded-lg text-2xl text-white">
          View More
        </button>
      </div>
    </section>
  );
};

export default services;
