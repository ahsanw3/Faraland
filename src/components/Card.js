import React from 'react'
import marketplace from '../images/marketplace.97b34048.png'
import viewButton from '../images/view-button.4e411843.svg'
function Card() {
  return (
    <div
    className="w-fit px-2 py-4"
    data-aos="fade-up"
  >
  <div className='relative w-fit'>
      <img src={marketplace} alt="/" className='' />
      <div className='absolute bottom-0'>
        <h1 className='text-white font-[400px]  font-americanCapitan text-[30px] mb-5'>Marketplace</h1>
        <p className='text-white font-[400px]  text-center text-[11px] w-[90%] m-auto mb-7'>A place for tradings of NFT items that increases heroes' strength. The rarer the item, the more power it carries.</p>
        <button className='mb-5'><img  src={viewButton}  alt=""/></button>
      </div>
    </div>
  </div>
  )
}

export default Card