import React from 'react'
import { useState } from "react";
import tick from "../images/check-icon.71bbae7a.svg"
import './NavBar.css'
import left from '../images/timeline-dot.7a9b20c6.svg'
import right from '../images/timeline-dot-right.0af7aed0.svg'
function RoadMap() {
    const [openPrevYearRoadMap, setOpenPrevYearRoadMap] = useState(false);
    const handleOpenRoadMap = () =>{
        setOpenPrevYearRoadMap(!openPrevYearRoadMap)
    } 
    return (
        <div className='w-full'>
            <h1 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan'>RoadMap</h1>
            <h1 className='text-[40px] text-white font-[400px]  font-americanCapitan' onClick={handleOpenRoadMap}>2021</h1>
            {openPrevYearRoadMap && 
            <div className='flex flex-col items-center w-[90%] max-w-[700px] m-auto sm:mt-20 mb-32'>

                <div className='flex flex-col sm:items-center sm:relative sm:w-full  sm:mt-16 sm:mb-10   sm:h-56  '>
                    <div className='w-fit sm:absolute sm:-top-32 sm:left-0 '>
                        <h1 className='text-white heading-font  text-start'>Q1-Phase1</h1>
                        {[...Array(7)].map((_, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <img src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1.5 font-light'>PvP Mode (Official)</p>
                                </div>
                            );
                        })}

                    </div>

                    <div><img src={left} className="mr-32 -mt-32 invisible sm:visible" alt="" /></div>
                    <div className='w-[130px] z-50 h-[5px] border border-yellow-600 rotate-90 mt-0 mr-7 invisible sm:visible'></div>
                    <div><img src={right} className="ml-20 mt-10 invisible sm:visible" alt="" /></div>
                    <div className='w-[130px] z-50 h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                    <div><img src={left} className="mr-32 mt-10 invisible sm:visible" alt="" /></div>
                    <div className=' w-[130px] z-50 h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                    <div><img src={right} className="ml-20 mt-10 invisible sm:visible" alt="" /></div>
                    <div className='w-fit sm:absolute sm:-bottom-20 sm:right-0 sm:h-60'>
                        <h1 className='text-white heading-font  text-start'>Q2-Phase1</h1>
                        {[...Array(3)].map((_, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <img src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1 text-sm'>PvP Mode (Official)</p>
                                </div>
                            );
                        })}

                    </div>
                </div>
                <div className='flex flex-col sm:relative sm:w-full  sm:mt-10  sm:h-40 '>
                    <div className='w-fit sm:absolute sm:-top-24 '>
                        <h1 className='text-white heading-font  text-start'>Q3-Phase1</h1>
                        {[...Array(2)].map((_, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <img src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1 text-sm'>PvP Mode (Official)</p>
                                </div>
                            );
                        })}

                    </div>
                    <div className='w-fit sm:absolute sm:top-20 sm:right-0 sm:h-60 '>
                        <p className='text-white heading-font  text-start'>Q4-Phase1</p>
                        {[...Array(4)].map((_, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <img src={tick} className="mt-1 mr-2" alt='' />
                                    <p className='text-white mt-1 text-sm'>PvP Mode (Official)</p>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
            }
            <h1 className='text-[40px] text-white font-[400px]  font-americanCapitan'>2022</h1>
            <div className='flex flex-col items-center w-[90%] max-w-[700px] m-auto sm:mt-20'>

                <div className='flex flex-col sm:items-center sm:relative sm:w-full  sm:mt-16 sm:mb-10   sm:h-56 '>
                    <div className='w-fit sm:absolute sm:-top-32 sm:left-0 '>
                        <h1 className='text-white heading-font  text-start'>Q1-Phase1</h1>
                        {[...Array(7)].map((_, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <img src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1.5 font-light'>PvP Mode (Official)</p>
                                </div>
                            );
                        })}

                    </div>

                    <div><img src={left} className="mr-32 -mt-32 invisible sm:visible" alt="" /></div>
                    <div className='w-[130px] z-50 h-[5px] border border-yellow-600 rotate-90 mt-0 mr-7 invisible sm:visible'></div>
                    <div><img src={right} className="ml-20 mt-10 invisible sm:visible" alt="" /></div>
                    <div className='w-[130px] z-50 h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                    <div><img src={left} className="mr-32 mt-10 invisible sm:visible" alt="" /></div>
                    <div className=' w-[130px] z-50 h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                    <div><img src={right} className="ml-20 mt-10 invisible sm:visible" alt="" /></div>
                    <div className='w-[130px] z-50 h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>

                    <div><img src={left} className="mr-32 mt-10 invisible sm:visible" alt="" /></div>

                    <div className='w-fit sm:absolute sm:-bottom-20 sm:right-0 sm:h-60'>
                        <h1 className='text-white heading-font  text-start'>Q2-Phase1</h1>
                        {[...Array(3)].map((_, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <img src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1 text-sm'>PvP Mode (Official)</p>
                                </div>
                            );
                        })}

                    </div>
                </div>
                <div className='flex flex-col sm:relative sm:w-full  sm:mt-10  sm:h-40 '>
                    <div className='w-fit sm:absolute sm:-top-24 '>
                        <h1 className='text-white heading-font  text-start'>Q3-Phase1</h1>
                        {[...Array(2)].map((_, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <img src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1 text-sm'>PvP Mode (Official)</p>
                                </div>
                            );
                        })}

                    </div>
                    <div className='w-fit sm:absolute sm:top-20 sm:right-0 sm:h-60 '>
                        <p className='text-white heading-font  text-start'>Q4-Phase1</p>
                        {[...Array(4)].map((_, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <img src={tick} className="mt-1 mr-2" alt='' />
                                    <p className='text-white mt-1 text-sm'>PvP Mode (Official)</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='w-fit  sm:w-full  h-72'>
                    <h1 className='text-white heading-font  text-start mt-20'>Q5-Phase1</h1>
                    {[...Array(5)].map((_, i) => {
                        return (
                            <div className='flex justify-start'>
                                <img src={tick} className="mt-1 mr-2" alt='' />
                                <p className='text-white mt-1 text-sm'>PvP Mode (Official)</p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </div>
    )
}

export default RoadMap