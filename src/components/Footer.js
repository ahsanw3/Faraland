import React from 'react'
import bispaw from '../images/biswap.d7c0fcca.png'

function Footer() {
    return (
        <div className=' bg-[#111121]   pb-16 pt-7 w-full'>
            <div className='w-[90%] w-max-[1300px] m-auto  lg:flex'>
                <div className='lg:w-1/4 mt-4'>
                    <p className='text-white  text-start lg:text-center   mt-2 mb-2  text-[30px] font-[400px]  font-americanCapitan'>© MoonKnight Labs</p>
                </div>
                <div className='sm:flex lg:w-3/4 mt-4 '>
                    <div className='flex  sm:w-2/3'>
                        <div className='w-1/2 '>
                            <p className='text-white text-start mt-2 mb-4  text-[30px] font-[400px]  font-americanCapitan'>about</p>
                            <p className='text-white text-start mt-2 mb-[10px] text-[16px]'>White Paper</p>
                            <p className='text-white text-start mt-2 mb-[10px] text-[16px]'>Project Overview</p>
                            <p className='text-white text-start mt-2 mb-[10px] text-[16px]'>Token Metrics</p>

                            <p className='text-white text-start'>Game Instructions</p>

                        </div>
                        <ul className='w-1/2  '>
                            <li className='text-white text-start mt-2 mb-4  text-[30px] font-[400px]  font-americanCapitan'>social</li>
                            <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>Discord</li>
                            <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>Twitter</li>
                            <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>Telegram</li>
                            <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>Blog</li>
                            <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>DAO Governance</li>
                        </ul>
                    </div>
                    <div className='sm:w-1/3'>
                        <ul>
                            <li className='text-white text-start mt-2 mb-4  text-[30px] font-[400px]  font-americanCapitan'>Others</li>
                            <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>Official Token</li>
                            <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>Help Center</li>
                            <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>FaraStarter</li>

                            <a className='footer__biswap  flex justify-end  pl-3 pr-3 pt-1 pb-1 rounded-xl items-center w-fit mt-2 mb-[10px]' href='/'>
                                <img src={bispaw} alt='' className='w-4 h-4' />
                                <span className='ml-2 text-[13px] text-white font-[500px]'>Buy Fara</span>
                            </a> <a className='footer__biswap  flex justify-end  pl-3 pr-3 pt-1 pb-1 rounded-xl items-center w-fit' href='/'>
                                <img src={bispaw} alt='' className='w-4 h-4' />
                                <span className='ml-2 text-[13px] text-white font-[500px]'>Buy Fara</span>
                            </a>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer