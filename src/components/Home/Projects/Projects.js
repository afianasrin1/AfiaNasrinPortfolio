import React from 'react';
import onlineCourse from "../../../Assests/ProjectsScreenShot/onlinecourse.png"
import flower from "../../../Assests/ProjectsScreenShot/flower.png"
import crockeries from "../../../Assests/ProjectsScreenShot/crockeries.png"
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <section id='Projects' className='py-20'>
            {/* <h1 className='text-blue-500 font-bold lg:pb-0 pb-5 lg:text-start text-center'>Projects</h1> */}
            <h1 className='text-blue-500 font-bold lg:pb-12 pb-12 text-center text-2xl'>Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
            <div  >
                    <img className='h-80 rounded-t w-full object-cover' src={crockeries} alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='font-semibold text-2xl'>Projects Name:Crockeries Gallery </h1>
                        <Link className='font-bold border border-slate-500 text-blue-500 hover: py-2 px-4 
                        hover:bg-blue-500 hover:text-white  transition-all rounded-sm ' to="/details">Details </Link>
                    </div>
                    <a href="https://crockeriesgallery-c395c.web.app" className='bg-blue-500 py-2 block text-center font-semibold text-white hover:bg-blue-600 transition-all rounded-b'>View Project</a>
                </div>
                  
                <div >
                <img className='h-80 rounded-t w-full object-cover' src={flower} alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='font-semibold text-2xl'>Projects Name:Review System</h1>
                        <Link className='font-bold border border-slate-500 text-blue-500 hover: py-2 px-4
                         hover:bg-blue-500 hover:text-white  transition-all rounded-sm ' to="/details1">Details1 </Link>
                    </div>
                    <a href="https://flower-cake-gift.web.app" className='bg-blue-500 py-2 block text-center font-semibold text-white hover:bg-blue-600 transition-all rounded-b'>View Project</a>
                </div>
                <div >
                    <img className='h-80 rounded-t w-full object-cover' src={onlineCourse} alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='font-semibold text-2xl'>Projects Name:onlineCourse</h1>
                        <Link className='font-bold border border-slate-500 text-blue-500 hover: py-2 px-4
                         hover:bg-blue-500 hover:text-white  transition-all rounded-sm ' to="/details2">Details2 </Link>
                    </div>
                    <a href="https://computer-science-courses.web.app/courses" className='bg-blue-500 
                    py-2 block text-center font-semibold text-white hover:bg-blue-600 transition-all rounded-b'>View Project</a>
                </div>
            
            </div>
        </section>
    );
};

export default Projects;