import React from "react";

const footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-10 rounded-tl-[300px] text-[16px] mt-28">
      <div className="container mx-auto gap-8 flex justify-around mt-14 ">
        <div className="ml-48 w-72">
          <h2 className="font-bold text-3xl mb-3">Digian</h2>
          <p>
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful.
          </p>
        </div>

        {/* Column 2: Links */}
        <div>
          <h2 className="font-bold text-3xl mb-3">Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Subscribe */}
        <div>
          <h2 className="font-bold text-3xl mb-3">Subscribe</h2>
          <form>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 mb-3 text-black rounded-md"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 w-full p-2 rounded-md text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h2 className="font-bold text-3xl mb-3">Address</h2>
          <p className="mb-3 flex items-center">
            <span className="material-icons">location_on</span>
            <span className="ml-2">Location</span>
          </p>
          <p className="mb-3 flex items-center">
            <span className="material-icons">call</span>
            <span className="ml-2">+01 1234567890</span>
          </p>
          <p className="mb-3 flex items-center">
            <span className="material-icons">email</span>
            <span className="ml-2">demo@gmail.com</span>
          </p>
          <div className="flex space-x-4">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <p>© 2024 All Rights Reserved By Free HTML Templates</p>
      </div>
    </footer>
  );
};

export default footer;
