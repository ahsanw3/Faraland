
import bispaw from '../images/biswap.d7c0fcca.png'
import crystal from '../images/crystal-usecase.150889b1.png'
import singleCRystal from '../images/upgrade-equipment.f01e90c4.png'
function Crystals() {
    return (
        <div className='max-w-[1200px]  mr-auto ml-auto mt-20  '>
            <h1 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan mb-7'>Faracrystal Usecase</h1>
            <div><p className='text-[16px]  text-white'>Contract Address</p>
                <p className='text-[16px] text-white'>BEP20: 0xF4Ed363144981D3A65f42e7D0DC54FF9EEf559A1</p>
                <div className='flex justify-center items-center mt-5'>
                    <a className='footer__biswap flex justify-end pl-2 pr-2 rounded-xl pt-1 pb-1  items-center' href='/'>
                        <img src={bispaw} alt='' className='w-4 h-4' />
                        <span className='ml-2 text-xs text-white font-[500px]'>Buy Fara</span>
                    </a>
                    <a className='footer__biswap ml-2 flex justify-end  pl-2 pr-2 pt-1 pb-1 rounded-xl items-center' href='/'>
                        <img src={bispaw} alt='' className='w-4 h-4' />
                        <span className='ml-2 text-xs text-white font-[500px]'>Buy Fara</span>
                    </a>
                </div>
                <div className='w-0 sm:w-fit'>
                    <img src={crystal} alt='' />
                </div>
                <div className='sm:w-0 m-auto sm:h-0'>
                {[...Array(5)].map((_, i) => {
                        return (
                            <div className='flex flex-wrap justify-around'>
                            <img src={singleCRystal} className="h-16 mt-4 mr-2 ml-2 " alt=''/>
                            <img src={singleCRystal} className="h-16 mt-4 mr-2 ml-2" alt=''/>
                        </div>
                        );
                    })}
                  
                    
                </div>
            </div>


        </div>
    )
}

export default Crystals