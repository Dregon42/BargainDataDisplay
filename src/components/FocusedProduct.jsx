import React from 'react'

export const FocusedProduct = () => {
  return (
    
        <div className="max-w-[738px] h-[327px] mx-auto m-14 justify-center items-center gap-[60px] flex">
            <div className="w-[327px] h-[327px] justify-center items-center flex">
                <img className="w-[327px] h-[327px]" src="https://via.placeholder.com/327x327" />
            </div>
                <div className="w-[351px] h-[327px] flex-col justify-center items-start gap-10 inline-flex">
                    <div className="h-[136px] flex-col justify-start items-start gap-2 flex">
                    <p className="w-[145.41px] text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Target</p>
                    <p className="w-[353px] text-zinc-800 text-2xl font-bold font-['Inter'] leading-9">Beats Studio Pro Wireless Headphones </p>
                    <p className="w-[145.41px] text-zinc-800 text-base font-normal font-['Inter'] leading-normal">Sandstone</p>
                </div>
                <h3 className="text-zinc-800 text-[32px] font-bold font-['Inter']">$199.95</h3>
            </div>
        </div>
   
  )
};
