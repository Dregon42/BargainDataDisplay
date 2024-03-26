import Nav from '../components/Nav'
import { Footer } from '../components/Footer'

import rightarrow from '../assets/arrow_right_alt.svg'


const Home = () => {
  return (
    <>
        <Nav showSearchBar={false} /> {/* removes searchbar from nav */}
        <div>
            {/* Top half */}
            <div className="w-screen bg-[#4EA64E] flex flex-col justify-center items-center gap-10">
                <div className='flex flex-col p-32 text-center'>
                    <div className="flex flex-col justify-center items-center gap-8"> 
                        <p className="max-w-[878px] text-white text-7xl font-normal font-protest">Find the right price,<br />stick to your budget.</p>
                        <p className="max-w-[878px] text-white text-xl font-medium font-sans">Smart shopping made simpler than ever</p>
                    </div>
                    <a href="/budget">
                        <button className="px-8 mt-8 py-3.5 bg-white rounded-[52.82px] flex justify-center items-center gap-1 w-1/3 mx-auto">
                            <p className="text-[#F08604] text-sm font-bold font-sans">Try It Out </p>
                            <div className="w-6 h-6 relative">
                                <img src={rightarrow} className="w-6 h-6 left-0 top-0 absolute bg-[#F08604]" alt="Placeholder" />  {/* Placeholder image */}
                            </div>
                        </button>
                    </a>
                </div>
            </div>

            {/* Bottom half */}
            <div className="w-screen h-[700px] px-[124px] pt-[77px] pb-[159.14px] bg-white justify-center items-center inline-flex">
                <div className="self-stretch flex-col justify-center items-center gap-[120px] inline-flex mx-auto">  {/* frame */}
                    <div className="w-[484px] h-12 text-center text-[#4EA64E] text-5xl font-protest ">How Bargain Works</div>
                    <div className="justify-start items-start gap-[50px] inline-flex">
                        <div className="w-[364px] h-[295.86px] relative">
                            <div className="w-[364px] h-[235px] left-0 top-[60.86px] absolute">
                                <div className="w-[364px] h-[235px] left-0 top-0 absolute bg-green-50 rounded-xl" />
                                <div className="w-[152px] h-[146px] left-[106px] top-[45px] absolute flex-col justify-start items-center gap-6 inline-flex">
                                    <img className="w-24 h-24" src="src/assets/coins.png" />
                                    <div className="text-center text-[#186718] text-xl font-medium font-['DM Sans']">Set your budget</div>
                                </div>
                            </div>
                            <div className="w-[78.72px] h-[78.72px] left-[143.14px] top-0 absolute">
                                <div className="w-[78.72px] h-[78.72px] left-0 top-0 absolute bg-[#4EA64E] rounded-full flex justify-center items-center">
                                    <h2 className="text-white text-[61.44px] font-normal font-['DM Sans']">1</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-[364px] h-[295.86px] relative">
                            <div className="w-[364px] h-[235px] left-0 top-[60.86px] absolute">
                                <div className="w-[364px] h-[235px] left-0 top-0 absolute bg-green-50 rounded-xl" />
                                <div className="w-[159px] h-[146px] left-[106px] top-[45px] absolute flex-col justify-start items-center gap-6 inline-flex">
                                    <img className="w-24 h-24" src="src/assets/cart.png" />
                                    <div className="text-center text-[#186718] text-xl font-medium font-['DM Sans']">Browse for items</div>
                                </div>
                            </div>
                            <div className="w-[78.72px] h-[78.72px] left-[143.14px] top-0 absolute">
                                <div className="w-[78.72px] h-[78.72px] left-0 top-0 absolute bg-[#4EA64E] rounded-full flex justify-center items-center">
                                    <h2 className="text-white text-[61.44px] font-normal font-['DM Sans']">2</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-[364px] h-[295.86px] relative">
                            <div className="w-[364px] h-[235px] left-0 top-[60.86px] absolute">
                                <div className="w-[364px] h-[235px] left-0 top-0 absolute bg-green-50 rounded-xl" />
                                <div className="w-[286px] h-[146px] left-[39px] top-[45px] absolute flex-col justify-start items-center gap-6 inline-flex">
                                    <img className="w-24 h-24" src="src/assets/downarrow.png" />
                                    <div className="text-center text-[#186718] text-xl font-medium font-['DM Sans']">Find a price that works for you</div>
                                </div>
                            </div>
                            <div className="w-[78.72px] h-[78.72px] left-[143.14px] top-0 absolute">
                                <div className="w-[78.72px] h-[78.72px] left-0 top-0 absolute bg-[#4EA64E] rounded-full flex justify-center items-center">
                                    <h2 className="text-white text-[61.44px] font-normal font-['DM Sans']">3</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Home