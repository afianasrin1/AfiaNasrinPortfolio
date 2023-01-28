import React from 'react';
import review1 from "../../Assests/project2/review1.png"
import review2 from "../../Assests/project2/review2.png"
import review3 from "../../Assests/project2/review3.png"
const Details1= () => {
    return (
        <section id='Projects' className='py-20'>
            <h1 className='text-black font-bold lg:pb-10 pb-5 text-center text-xl'> ProjectsScreenShot</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 '>
                <div >
                    <img className='h-80 rounded-t w-full ' src={review1} alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='text-sm text-center'>ProjectsScreenShot-1</h1>
                       
                    </div>
                   
                </div>
                <div  >
                    <img className='h-80 rounded-t w-full ' src={review2} alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='text-sm text-center'>ProjectsScreenShot-2 </h1>
                       
                    </div>
                    
                </div>
                <div >
                <img className='h-80 rounded-t w-full' src={review3} alt="" />
                    <div className='flex justify-between mx-3 my-4'>
                        <h1 className='text-sm text-center'>ProjectsScreenShot-3</h1>
                       
                    </div>
                   
                </div>
                <div>
               <h1 className='font-bold text-xl text-start'>Click on the LINK and visit this site</h1> 
                <a href="https://flower-cake-gift.web.app/" 
                    className=' py-2 block text-center font-semibold text-black
                     hover:text-blue-600 transition-all rounded-b'> Live Link</a>
                      <a href="https://github.com/afianasrin1/online-delevery-client" 
                    className=' py-2 block text-center font-semibold text-black
                     hover:text-blue-600 transition-all rounded-b'> Client Site Link</a>
                      <a href="https://github.com/afianasrin1/online-delevery-server" 
                    className=' py-2 block text-center font-semibold text-black
                     hover:text-blue-600 transition-all rounded-b'> Server site Link</a>
                </div>
            </div>
            <div>
                <ol> <h1 className='font-bold text-xl'>Some features of my project:</h1>
                    <li>Online Learning Offers Convenience And Flexibility</li>
<li>
High-Quality Student-Tutor Interactions
</li>
<li>
More Students Can Enroll At Once
</li>
<li>Web-Based Learning Will Grow In Popularity</li>
<li>Better Learning Experience</li>
 <li>More Cost-Effective</li> 
 <li>Retention Rates Are Higher</li> 
  </ol>
               
</div>
<br/>
            <div>
                <ul>
                  <h1 className='font-semibold text-xl'>Packages:</h1>  
                  <li>Used React JS Framework.</li>
                  <li>React Router for client site navigation.</li>
                  <li>NPM as package manager.</li>
                  <li>Tailwind.</li>
                  <li>React Icons.</li>
                  <li>Context Api.</li>
                  <li>React hot toast.</li>
                  <li>PhotoViewer</li>
                  <li>aois</li>
                  <li> And etc.</li>
                </ul>

 </div>
        </section>
    );
};

export default Details1;