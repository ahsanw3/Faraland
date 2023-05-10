
import bg from '../images/download-android.31c566ad.png'
import activePage from '../images/active-page.5fe5d094.svg'
import homeIntroRightframe from '../images/homeIntroRightframe.png'

function Home() {
    return (
        <div className='mb-80 lg:mb-0 '>

            <div className='intro mt-[100px] mb-[100px] mr-auto ml-auto max-w-[1000px] '>
                <h3 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan'>THE BIGGEST WAR GAME ON BLOCKCHAIN</h3>
                <div className='flex w-[82%] justify-around flex-wrap m-auto mt-2'>
                    <img src={bg} alt='' className='mt-5 mb-5' />
                    <img src={bg} alt='' className='mt-5 mb-5' />
                    <img src={bg} alt='' className='mt-5 mb-5' />
                </div>
                <div className='h-[350px] flex  flex-col items-center lg:flex-row mt-8'>
                    <div className='w-[90%] sm:w-[95%] h-full lg:max-w-[400px]  mt-5 text-white flex-col flex justify-around items-center text-center lg:text-left relative'>
                        <div className='flex items-end w-2/4 justify-between lg:w-[70%] text-[#ffc904] text-[32px] font-[400px]  font-americanCapitan'>
                            <div >
                                <h1 className='bold'>PVE</h1>
                                <img src={activePage} alt=""/>
                            </div>
                            <div>
                                <img src={activePage} alt=""/>
                            </div>
                            <div>
                                <h1 className='bold'>
                                    PVP
                                    <img src={activePage} alt="" />
                                </h1>
                            </div>
                        </div>
                        <p className='text-[16px] font-[400px]'>Explore the Faraland world and the races living in the continent to find a way to seal the Demon
                            Lord Beelzebul. In their journey, players must collect heroes from different races to overcome toug
                            h challenges. Each choice made during a quest can alter the storyline and expose your heroes to mysteries
                            and hidden treasures.</p>
                        <div className='content-divider bg-red-900 rotate-90 invisible lg:visible'></div>
                    </div>
                    <div className='w-[90%]  sm:w-[95%] h-full  lg:max-w-auto mt-5   flex justify-end relative '
                    >
                        <div className='w-full lg:w-[92%] h-full flex justify-center items-center elaive'
                            >
                            <img src={homeIntroRightframe} alt="" className='w-full h-full'/>
                            <iframe  className="absolute  top-2   w-[98%] lg:w-[91%] h-[96%]"  src="https://www.youtube.com/embed/B5W2v_Tj1CE"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                                allowfullscreen title="Embedded youtube">
                            </iframe>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home