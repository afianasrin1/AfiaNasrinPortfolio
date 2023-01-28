import emailjs from "@emailjs/browser";
import React, { useRef, useState } from 'react';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        emailjs
        .sendForm(
            "service_djno5wd",
            "template_17ac4j6",
            form.current,
            "pZUKSO900qVT-K5_d"
          )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };


    return (
        <section id='Contact pt-16 '>
            <div className="py-6 ">
                <h1 className='text-blue-500 pb-5 font-bold text-center'>Contact With Me</h1>
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x divide-blue-400">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>bansree ,dhaka, 1205</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>01674931378</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>afia.nasrin3e@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail}
                        className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1">Full Name</span>
                            <input type="text" name="user_name" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 border pl-2 py-2 border-blue-500 " required />
                        </label>
                        <label className="block">
                            <span className="mb-1">Email Address</span>
                            <input type="email" name="user_email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 pl-2 py-2 focus:ring-blue-400 border border-blue-500 " required data-temp-mail-org="0" />
                        </label>
                        <label className="block">
                            <span className="mb-1">Message</span>
                            <textarea rows="3" name="message" className="block w-full pl-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border border-blue-500 " placeholder='Input Your message...' required></textarea>
                        </label>
                        <button className="self-center px-8 py-3 text-lg rounded 
                        focus:ring hover:ring focus:ring-opacity-75 dark:bg-blue-400 
                        dark:text-gray-900 focus:ring-blue-400 hover:ring-blue-400">Submit</button>
                        <span className="text1">{done && "Thanks for Contacting me"}</span>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;