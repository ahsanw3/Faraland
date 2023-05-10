import React from 'react'
import HumanScar from '../images/Scar.9795d75a.png'
import Epic from '../images/epic.7f9f48e7.png'
import gridOfSTones from '../images/type-advantages.e18dc051.png'

import geenCrystal from "../images/geenCrystal"
function HomeFeatures() {
    return (
        <>
            <div className='w-full relative '>
                <img src={geenCrystal} className=" h-32 lg:h-72 lg:-left-16 lg:top-10 absolute top-0  left-0 animate-bounce custom-bounce" alt="" />
            </div>
            <div className='max-w-[1200px]  mr-auto ml-auto flex flex-col lg:flex-row  '>
                <div className='lg:w-1/2 text-center mt-5 mb-5 '>
                    <h1 className='text-[48px] text-[#ffc904]  font-[400px]  font-americanCapitan'>Body Part Ranking </h1>
                    <p className='text-white text-[16px] font-light mt-5'>A hero has a minimum of four and a maximum of six bodyparts</p>
                    <p className='text-white text-[16px] font-light  mt-1'>A hero has a minimum of four and bodyparts</p>
                    <div className='heroes__divider mt-7'></div>
                    <div className='h-12 w-[90%]  mt-2 mb-2  mr-auto ml-auto flex justify-between '>
                        {[...Array(7)].map((_, i) => {
                            return (
                                <img src={HumanScar} className="w-11 h-11" alt='' />

                            );
                        })}
                    </div>
                    <div className='heroes__divider mb-7'></div>
                    <div className='flex flex-col items-center justify-center mt-16 mb-12'>
                        <div className='flex mt-5 justify-center'>
                            <img src={Epic} className="w-[23%]" alt='' />
                            <img src={Epic} className="mr-5 ml-5 w-[23%]" alt='' />
                            <img src={Epic} className="w-[23%]" alt='' />
                        </div>
                        <div className='flex mt-5 justify-center'>
                            <img src={Epic} className="w-[23%]" alt='' />
                            <img src={Epic} className="mr-5 ml-5 w-[23%]" alt='' />
                            <img src={Epic} className="w-[23%]" alt='' />
                        </div>

                    </div>


                </div>
                <div className='lg:w-1/2 mt-5 mb-5 '>
                    <h1 className='text-[#ffc904] text-[48px] font-[400px]  font-americanCapitan'>Hero Elements</h1>
                    <p className='text-white text-[16px] font-light mt-5'>A hero has a minimum of four and a maximum of six body parts. A hero has a minimum of four and a maximum of six body parts.</p>
                    <div className='heroes__divider mt-7'></div>
                    <div className='h-12 w-[90%]  mt-2 mb-2  mr-auto ml-auto flex justify-between'>
                        {[...Array(7)].map((_, i) => {
                            return (
                                <img src={HumanScar} className="w-11 h-11" alt='' />

                            );
                        })}
                    </div>
                    <div className='heroes__divider mb-7'></div>
                    <div className=' flex items-center justify-center mt-16 mb-12'>
                        <img src={gridOfSTones} className="w-2/4" alt='' />
                    </div>

                </div>
            </div>
        </>

    )
}

export default HomeFeatures