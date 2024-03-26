import { useState } from 'react';
import { useSelector } from 'react-redux';


// Take input from Budget page and use to set budget on widget

const BudgetWidget = ({ showBudget }) => {
    const [open, setOpen] = useState(true);
    const myBudget = useSelector(state => state.budget.value);;

    console.log(myBudget);
    

    return (
        <>
            {!open ? (
                <div className="w-[375px] h-[244px] p-5 bg-[#FFFCF1] text-[#F08604] font-bold rounded-lg flex-col right-0 top-32 fixed items-end justify-end flex">
                    <div className="w-6 h-6 relative">
                        <button onClick={() => setOpen(!open)}>X</button>
                    </div>
                    <div className="px-1.5 pt-5 pb-10 bg-[#FFFCF1] rounded-lg flex-col justify-start items-end gap-2.5 flex">
                        <div className="flex-col justify-start items-center gap-10 flex">
                            <p className="text-zinc-800 text-base font-bold font-['Inter']">My Budget</p>
                            <div className="flex-col justify-start items-start gap-3 flex">
                                <div className="w-[322px] h-[7px] relative bg-[#FFEDD8] rounded-[9.60px]" /> {/* Progress bar */}
                                <div className="justify-start items-start inline-flex">
                                    <div className="w-[230px] text-zinc-800 text-sm font-semibold font-['Inter']">$0.00</div>
                                    <div className="flex-col justify-start items-end gap-2 inline-flex">
                                        <p className="text-zinc-800 text-sm font-semibold font-['Inter']">Budget: ${myBudget}</p>
                                        <a href="/budget">
                                            <p className="text-[#F08604] text-sm font-semibold font-['Inter']">Edit Budget</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div 
                    className="w-[33px] h-[174px] px-2 py-[50px] rotate-180 bg-[#F08604] rounded-tr-[10px] rounded-br-[10px] flex-row justify-center items-center gap-2.5 inline-flex fixed right-0 top-32 cursor-pointer"
                    onClick={()=> setOpen(!open)}
                >
                    <h2 className="flex-none w-auto rotate-90 text-white text-lg font-semibold font-['Inter']">My Budget</h2>
                </div>
            )}
        </>
    );
};

export default BudgetWidget;
