import React from 'react';

const MyForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <section className='bg-white py-10 lg:py-[50px] overflow-hidden relative z-10'>
            <div className='container'>
                <div className="flex flex-wrap lg:justify-between -mx-4">
                    <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                        <div className="max-w-[570px] mb-12 lg:mb-0">
                            <form onSubmit={handleSubmit}>
                                <div className='mb-6'>
                                    <input
                                        type='text'
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
