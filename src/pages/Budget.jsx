import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBudget } from '../redux/BudgetSlice';
import Nav from '../components/Nav';
import BudgetWidget from '../components/BudgetWidget';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export const Budget = ({}) => {
    const [newBudget, setNewBudget] = useState();
    const dispatch = useDispatch();


    const handleChange = (event) => {
        setNewBudget(event.target.value)
    }

    const handleContinue = () => {
        dispatch(updateBudget(newBudget));
    } 

    

  return (
    <>
        <Nav />
        <div className='w-full h-screen bg-[#186718] flex justify-center items-center overflow-x-hidden'>
            <div className="w-[550px] h-[390.92px] flex-col justify-start items-center gap-8">
                <p className="w-[550px] text-center text-white text-5xl font-normal font-protest">
                    How much are you looking <br/>to spend?
                </p>
                <div className="h-[268.92px] w-[400px] p-10 bg-white rounded-lg flex-col justify-center items-center gap-2.5 flex mx-auto mt-8">
                    <div className="flex-col justify-start items-center gap-8 flex">
                        <div className="justify-start items-center gap-[6.34px] inline-flex">
                            <p className="text-zinc-800 text-[16.90px] font-semibold font-['Inter']">
                                Input your budget
                            </p>
                            <div className="w-5 h-5 relative">
                                <div className="w-5 h-5 left-0 top-0 absolute bg-zinc-300" />
                            </div>
                        </div>
                        <div className='inline-flex font-bold text-[42.26px] text-zinc-800'>
                            <p>$</p>
                            <input 
                                className="text-zinc-800 text-[40px] border-white border-1 font-semibold font-['Inter'] w-32 flex-grow" 
                                placeholder='Enter'
                                type='text'
                                onChange={handleChange}
                                value={newBudget}
                             />
                        </div>
                        <div className="px-[41.20px] py-[17.96px] bg-lime-300 rounded-[52.82px] justify-center items-center gap-[10.56px] inline-flex">
                            <Link to="/product_results">
                                <button onClick={handleContinue} className="text-green-800 text-sm font-semibold font-['Inter']">Continue</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}