import React from 'react'
import soulstone from '../images/soulstone-usecase.554880da.png'
import singleCRystal from '../images/upgrade-equipment.f01e90c4.png'
function SoulStone() {
    return (
        <div className='max-w-[1200px]  mr-auto ml-auto w-[90%] mt-24 '>
            <h1 className='text-[#ffc904] text-[60px] font-[400px] font-americanCapitan mb-7'>SoulStone Usecase</h1>
            <div className=''>
              <p className='text-lg text-white '>Magic stones that are hunted down everywhere in Faraland, with lots of integrated functions. Demi Heroes need them to lengthen their lives while NFT Heroes need them to grow significantly in strength.</p>
              <div className='w-0 sm:w-fit -mt-7  '>
                    <img src={soulstone} atl='' className='w-[70%] h-[20%] ' alt=''/>
                </div>
                <div className='sm:w-0 m-auto  mt-14 sm:h-0'>
                    <div className='flex flex-wrap justify-around'>
                        <img src={singleCRystal} className="h-16 mt-4 mr-2 ml-2 " alt=''/>
                    </div>
                    <div className='flex flex-wrap justify-around'>
                        <img src={singleCRystal} className="h-16 mt-4 mr-2 ml-2 " alt=''/>
                    </div>
                    <div className='flex flex-wrap justify-around'>
                        <img src={singleCRystal} className="h-16 mt-4 mr-2 ml-2 " alt=''/>
                    </div>
                    <div className='flex flex-wrap justify-around'>
                        <img src={singleCRystal} className="h-16 mt-4 mr-2 ml-2 " alt=''/>
                    </div>
                    <div className='flex flex-wrap justify-around'>
                        <img src={singleCRystal} className="h-16 mt-4 mr-2 ml-2 " alt=''/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SoulStone