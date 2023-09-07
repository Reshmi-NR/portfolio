import React, {useState} from 'react';
import {useRef} from "react";
import emailjs from '@emailjs/browser';

const MyForm = () => {
    const form = useRef()
const [responseSuccess,setResponseSuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j1hyrhk', 'template_bde6koh', form.current, 'GZUer3WlUfsFk6hmF')
        .then((result) => {
            if(result.status === 200){
                setResponseSuccess(true);
            }
        }, (error) => {
            console.log(error.text);
        });
       // e.target.reset()
    };
    return (
        <section className='bg-white dark:bg-slate-900 py-10 lg:py-[50px] overflow-hidden relative z-10'>
            <div className='container'>
                <div className="flex flex-wrap lg:justify-between -mx-4">
                    <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                        <div className="max-w-[570px] mb-12 lg:mb-0">
                            {responseSuccess &&
                                <p className="text-lg leading-loose text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600">Thank you for your message.I'll get back to you
                                     as soon as possible.</p>}
                            {!responseSuccess &&
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className='mb-6'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Your Name'
                                        className='
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                                    />
                                </div>
                                <div className='mb-6'>
                                    <input
                                        type='email'
                                        name='user_email'
                                        placeholder='Your Email'
                                        className='
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                                    />
                                </div>
                                <div className='mb-6'>
                                    <input
                                        type='text'
                                        name='phone_number'
                                        placeholder='Your Phone'
                                        className='
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                                    />
                                </div>
                                <div className='mb-6'>
                  <textarea
                      rows='6'
                      name='message'
                      placeholder='Your Message'
                      className='
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                  ></textarea>
                                </div>
                                <div>
                                    <button
                                        type='submit'
                                        className='
                        w-full
                        text-emerald-600
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        hover:bg-amber-200
                        '>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                            }
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyForm;
