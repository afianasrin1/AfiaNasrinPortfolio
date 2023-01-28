import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assests/logo.png'
import { FaGoogle, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
const Footer = () => {
    const menuItems = <React.Fragment>
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
                href="https://drive.google.com/uc?id=1MlOv761_8b_sBKL5LAcKfmghEPq_iR7y&authuser=0&export=download"
                className="bg-blue-400 text-white rounded p-3"
                aria-label="Get Resume"
                title="Get Resume"
            >
                Get Resume
            </a>

        </li> */}
        
    </React.Fragment>
    return (
        <div>
            <footer className="dark:text-gray-9">
                <div className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                    <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        {menuItems}
                    </ul>
                    <div className="flex flex-col justify-center items-center pt-6 lg:pt-0">
                        <div className="flex justify-center space-x-4 items-center">
                            <a className=' text-2xl hover:text-blue-600 transition-all' href="">
                                <FaFacebook />
                            </a>
                            <a className=' text-2xl hover:text-blue-600 transition-all' href="">
                                <FaLinkedin />
                            </a>
                            <a className=' text-2xl hover:text-blue-600 transition-all' href="">
                                <FaGithub />
                            </a>
                            <a className=' text-2xl hover:text-blue-600 transition-all' href="">
                                <FaGoogle />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;