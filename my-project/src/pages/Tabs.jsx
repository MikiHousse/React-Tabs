import React from 'react';
import One from '../image/illusOne.png'


export const Tabs = () => {
  return (
    <>
        <div className='container pt-16'>
            <div className='bg-lightRed'>
                <nav className='pt-[100px] pl-[100px]'>
                    <ul className='flex justify-start gap-14 pb-2'>
                        <li className='text-2xl hover:border-b-2 hover:border-lightPurple'>create</li>
                        <li className='text-2xl hover:border-b-2 hover:border-lightPurple'>manage</li>
                        <li className='text-2xl hover:border-b-2 hover:border-lightPurple'>automate</li>
                        <li className='text-2xl hover:border-b-2 hover:border-lightPurple'>chat</li>
                        <li className='text-2xl hover:border-b-2 hover:border-lightPurple'>delegate</li>
                    </ul>
                </nav>
                <div className='grid grid-cols-[550px_830px] pb-[120px]'>
                    <div className='pl-[100px] pt-16 pr-[50px]'>
                        <h3 className='font-bold text-[46px]'>all your creative tasks <span className='text-lightPurple'>simplified with AI.</span></h3>
                        <p className='text-grayText text-xl pt-6'>Get content ideas, generate captions that respects brand’s tone of voice, design and plan your publications all in one place</p>
                        <div className='pt-8'>
                            <h4 className='text-grayText'>REPLACES</h4>
                            <ul className='flex gap-8 pt-2'>
                                <li className='font-semibold text-lg'>Feedly</li>
                                <li className='font-semibold text-lg'>Canva</li>
                                <li className='font-semibold text-lg'>Copy.ai</li>
                                <li className='font-semibold text-lg'>Hootsuite</li>
                            </ul>
                    </div>
                        <a href="." className='text-lg inline-block rounded-2xl mt-10 text-white bg-lightPurple px-10 py-4 shadow-lg shadow-lightPurple/50'>Sign up</a>
                    </div>
                    {/* второе окно */}
                    <div className='grid text-center pt-12 pr-2'>
                        <img src={One} alt="One" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

