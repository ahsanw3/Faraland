import React from 'react'

import BackersData from './BackersData'
function Backers() {
    return (
        <div className='max-w-[1100px] w-[97%] mr-auto ml-auto mt-5 mb-24 '>
            <h1 className=' mb-10 text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan mt-16'>Backed By</h1>
            {BackersData.map((row, i) => {
                return (
                    <div className='sm:flex mt-4 '>
                        {row.row.map((col, j) => {
                            return (
                                <div className='flex sm:w-1/3'>
                                    {col.col.map((item, k) => {
                                        return (
                                            <div className='w-1/2 flex justify-center items-center'>
                                                <img src={item.griditem}
                                                    className={`${item.largeImg ? "w-[60%] lg:h-20" : "w-[80%]"}`} alt='' />
                                            </div>
                                        );
                                    })}



                                </div>
                            );
                        })}




                    </div>
                );
            })}

        </div>

    )
}

export default Backers