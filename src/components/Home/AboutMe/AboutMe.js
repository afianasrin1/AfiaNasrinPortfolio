import React from 'react';
import hijab from '../../../Assests/hijab.jpeg'

const AboutMe = () => {
    return (
        <section id='AboutMe'>
            
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 md:flex-none flex flex-col justify-center lg:items-start text-center lg:text-start items-center lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="font-bold text-blue-500 pb-4">About Me</p>
                            </div>

                            <p className="text-gray-700 text-base md:text-lg">I am Afia Nasrin Front-end Developer. I design and code beautiful
            simple thinks , and I love what I do.I understand the importance of
            innovative websites in today's time and that brings my passion to
            building cutting-edge and state-of-the-art websites for my clients.
            I'm a front-end developer in JavaScript/Node JS/MongoDB
            technologies. I've one year of experience in front-end development.
            I can use any JavaScript framework ReactJS, NextJS, ExpressJS, at
            its best. If you need any work related to any JavaScript technology,
            I would be your best choice. Feel free to contact me and discuss
            your requirements.</p>
                        </div>
                        <div className="flex flex-wrap text-center font-semibold gap-2 ">
                            <a
                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2Fuc%3Fid%3D1Al__x4xR0HDIAOgZPYCnp23gmXpJoDN1%26export%3Ddownload%26fbclid%3DIwAR2otNndGPoguGWXENLEfPEk5Hmpon7XQuDvPe836pbs_BGk0FexYqdjOj8&h=AT1j59ViusBlp7a324TBKPXY9PTiayvg1ZejE4tljqof0mQEq-BOG-EbuqrNp0ZMLwLJhVHYgJqbmGwgOBV2_J65UXvebAq2pOGrlT1Wmt9AUhqjuhiP5csBH-vlrKCMNN-ZAd8jPxE"
                                className="bg-blue-400 text-white rounded w-28 py-2  hover:bg-blue-500 transition-all"
                                aria-label="Get Resume"
                                title="Get Resume"
                            >
                                Get Resume
                            </a>
                            <a
                                href="#MySkills"
                                className="border-2 border-blue-400 text-black rounded hover:bg-blue-500 transition-all w-28 py-2"
                                aria-label="My Skills"
                                title="My Skills"
                            >
                                My Skills
                            </a >
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2">
                        <img className="max-h-96 w-96 p-1 border-blue-500 border-2  
                        rounded-xl object-cover" src={hijab} alt=""/>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;