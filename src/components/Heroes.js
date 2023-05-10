import React from 'react'
import bg from '../images/download-android.31c566ad.png'
import humanRing from '../images/activeHuman.png'
import human from '../images/human-male.bd9b3350.png'
import humanBg from '../images/humanbg.6923d53c.png'
import BigHumanMale from '../images/male_human.807b6c57.png'
import BigHumanFemale from '../images/female_human.304bcdf4.png'
import heroic from '../images/heroic-charge.e5282b45.png'
import maleGif from '../images/male.315f4d2c.gif'
import femaleGIf from '../images/female.7e7b9b33.gif'
import crystalPart2 from '../images/crystal-part2.png'
import crystalPart1 from '../images/crystal-part1.png'
function Heroes() {
  return (
    <div  className='w-full'>
      <div className='absolute right-10 w-[13%] flex items-center animate-bounce custom-bounce z-10'>
        <img src={crystalPart2} className=" z-10 " alt=''/>
        

      </div>
      <div className='absolute right-7 sm:right-5  w-[13%] flex items-center animate-bounce custom-bounce z-0'>
        <img src={crystalPart1} className="   w-2/4 h-2/5 z-0 mt-2 sm:mt-4 lg:mt-6 rotate-12  custom-bounce 2xl:ml-4" alt=''/>
      </div>
      <div className='max-w-[1100px]  mb-24 mr-auto ml-auto '>
        <h1 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan mb-7'>Characters</h1>
        <div className=' text-center  w-[90%] m-auto mt-[20px] mb-[20px] lg:w-[80%] '>
          <p className='text-white text-base mt-3'>
            NFT Hero: Owners of the Faraland world, with each race unique in powers and classes as well as immensely
            strong when teamed up. The poopulation of Faraland is only 20,000 heroes, with more powers as they originate from rarer races!
          </p>
          <p className='text-white text-base mt-5'>
            Demi Heroes: Cross-dimensional heroes trapped in Faraland. They take the form and features of NFT Heroes to fit in, but has a limited lifespan.
            To extend their lives, Demis have to consume "Soul Stones," which help them adapt environmental differences in this dimension.
          </p>

        </div>
        <div className='flex w-[45%] ml-auto mr-auto mt-9 mb-14  justify-around flex-wrap'>
          <img src={bg} alt='' className='mt-2 mb-2' />
          <img src={bg} alt='' className='mt-2 mb-2' />
        </div>
        <div className='heroes__divider mb-5 '></div>
        <div className='flex  w-4/5 m-auto justify-center flex-wrap'>
          {[...Array(7)].map((_, i) => {
            return (
              <div className='relative ml-2 mr-2 mt-2 mb-2'>
                <img src={humanRing} alt="" />
                <img src={human} className=" absolute top-2 w-[65%] left-4" alt="" />

              </div>
            );
          })}

        </div>
        <div className='heroes__divider mt-5 mb-7'></div>
        <div className='flex flex-col md:flex-row  max-w-[1500px] w-90%  '>
          <div className="w-90% mt-16 relative  lg:w-[45%]   ">
            <img src={humanBg} className="ml-5 pt-5 pb-5  h-96"  alt=''/>
            <div className=' w-[80%] m-auto flex justify-between absolute bottom-6 left-10 z-50'>
          
            <img src={maleGif} className="h-32 scale-x-[-1]"  alt=''/>
            <img src={femaleGIf} className="h-32"  alt=''/>

            </div>
            <div className='absolute -top-7 max-w-[1000px] w-90% left-10 md:left-12'>
            <img src={BigHumanMale} className="w-[60%] " alt='' />
            </div>
            <div className='absolute -top-5 left-48 sm:left-56 md:left-32 lg:left-24 md:-top-2  md:w-3/4 lg:w-[85%] lg:h-[400px] overflow-hidden '>
            <img src={BigHumanFemale} className="w-3/4  sm:w-[65%] lg:w-[95%]  " alt='' />
            </div>
          </div>
          <div className='lg:w-[53%]  ml-8 '>
            <h1 className='text-4xl font-bold  text-white '>Human</h1>
            <p className=' text-white text-2xl mt-3 mb-4'>Rate 50%</p>
            <div className=''>
              <div className='flex flex-col justify-center items-center sm:flex-row'>
                <div className='w-[90%] sm:w-2/4 '>
                  <p className=' text-white text-start pl-4 text-xl pr-2'>Paladins take on the position of a Tanker with a defensive and supporting skill set. Paladins will
                    be a reliable shield for other allies. The typical equipment for Paladins is a shield, which
                    maximizes the hero's defense.</p>
                </div>
                <div className='w-2/4'>
                  <div className='flex justify-start items-center part'>
                    <img src={heroic} className="w-[15%] ml-3 mr-3" alt=''/>
                    <p className='text-white text-lg'>Heroic Charge</p>
                  </div>
                  <div className='flex justify-start items-center part'>
                    <img src={heroic} className="w-[15%] ml-3 mr-3" alt=''/>
                    <p className='text-white text-lg'>Heroic Charge</p>
                  </div>
                  <div className='flex justify-start items-center part'>
                    <img src={heroic} className="w-[15%] ml-3 mr-3" alt=''/>
                    <p className='text-white text-lg'>Heroic Charge</p>
                  </div>

                </div>
              </div>
              <div className='flex w-full justify-between mt-8'>
                <div className=' text-white w-[30%] text-xl font-semibold heroClass pt-8 pb-4'>Paladin</div>
                <div className='text-white w-[30%] text-xl font-semibold heroClass pt-8 pb-4'>Blade Dancer</div>
                <div className='text-white w-[30%] text-xl font-semibold heroClass pt-8 pb-4'>Spell Singer</div>
              </div>
            </div>
          </div>
        </div>
        <div className='heroes__divider mb-5 '></div>

      </div>
    </div>
  )
}

export default Heroes