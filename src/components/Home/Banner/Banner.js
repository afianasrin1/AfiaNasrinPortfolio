import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <section className="">
            <div className="flex justify-center h-screen flex-col text-center items-center ">
                <h1 className="font-bold text-blue-400 leading-none lg:text-5xl md:text-4xl sm:text-3xl text-2xl ">  <TypeAnimation
                    sequence={[
                        'Most.', 
                        1000, 
                        'Afia',
                        2000, 
                        'Nasrin',
                        3000,
                        'Most. Afia Nasrin',
                        4000,
                        () => {
                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                        }
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em' }}
                />
                </h1>
                <p className="sm:px-8 mt-8 mb-12 text-lg">  Front-end Developer</p>
                <div className="flex flex-wrap text-center gap-2 justify-center">
                    <a
                        href="https://github.com/JilluRahmanJibon/my-sister-portfolio/raw/main/src/Assests/AfiaNasrin.pdf"
                        className="bg-blue-400 text-white rounded w-28 py-2 hover:bg-blue-500 transition-all"
                        aria-label="Get Resume"
                        title="Get Resume"
                    >
                        Get Resume
                    </a>
                    <a
                        href="#AboutMe"
                        className="border-2 border-blue-400 text-black rounded hover:bg-blue-500 transition-all w-28 py-2"
                        aria-label="About Me"
                        title="About Me"
                    >
                        About Me
                    </a >
                </div>
            </div>
        </section>
    );
};

export default Banner;