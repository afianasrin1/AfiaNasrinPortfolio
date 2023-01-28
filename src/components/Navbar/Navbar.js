import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = (
    <React.Fragment>
      <li>
        <a
          href="/#AboutMe"
          aria-label="About Me"
          title="About Me"
          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="/#MySkills"
          aria-label="Skills"
          title=""
          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="/#Projects"
          aria-label="Projects"
          title="Projects"
          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Project
        </a>
      </li>
      <li>
        <Link
          to="/blog"
          aria-label="Blog"
          title="Blog"
          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Blog
        </Link>
      </li>
      <li>
        <a
          href="/#Contact"
          aria-label="Contact"
          title="Contact"
          className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Contact
        </a>
      </li>
      {/* <li>
            <a 
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2Fuc%3Fid%3D1Al__x4xR0HDIAOgZPYCnp23gmXpJoDN1%26export%3Ddownload%26fbclid%3DIwAR2otNndGPoguGWXENLEfPEk5Hmpon7XQuDvPe836pbs_BGk0FexYqdjOj8&h=AT1j59ViusBlp7a324TBKPXY9PTiayvg1ZejE4tljqof0mQEq-BOG-EbuqrNp0ZMLwLJhVHYgJqbmGwgOBV2_J65UXvebAq2pOGrlT1Wmt9AUhqjuhiP5csBH-vlrKCMNN-ZAd8jPxE"
                className="bg-blue-400 text-white rounded p-3"
                aria-label="Get Resume"
                title="Get Resume"
            >
                Get Resume
            </a>

        </li> */}
      <li>
        <a className="font-semibold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" href="https://drive.google.com/file/d/1Al__x4xR0HDIAOgZPYCnp23gmXpJoDN1/view?usp=share_link">
          Get Resume
        </a>
      </li>
    </React.Fragment>
  );
  return (
    <div className=" ">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="Afia.Nasrin"
          title="Afia.Nasrin"
          className="inline-flex items-center"
        >
          <img className="w-10 " src={logo} alt="" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            fia.Nasrin
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex ">
          {menuItems}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Afia.Nasrin"
                      title="Afia.Nasrin"
                      className="inline-flex items-center"
                    >
                      <img className="w-10 " src={logo} alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        fia.Nasrin
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 ">{menuItems}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;