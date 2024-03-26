import {useState} from 'react';
import bargainlogo from '../assets/BargainTag.svg'
import {FaSearch} from 'react-icons/fa';


const Nav = ({ searchTarget, showSearchBar }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeToTerm = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleSearch = (event) => {
    event.preventDefault();
    searchTarget(searchTerm);
  };

  return (
    <div className={`py-4 px-20 my-auto bg-[#4EA64E] ${ showSearchBar ? 'justify-center' : 'justify-between' } gap-4 flex items-center text-base`}>
      <img src={bargainlogo} height={100} width={100} alt="Bagain Logo" />
      { showSearchBar && (

        <div className="flex gap-4 mt-5 items-center p-2 bg-white border-1 border-zinc-500 mx-auto w-1/3 rounded-full">
          <form 
            className='w-full inline-flex border-zinc-500'
            onSubmit={handleSearch}> 
              <input
                  type="text"
                  value={searchTerm}
                  onChange={handleChangeToTerm}
                  placeholder="Search by keyword"
                  className="searchbar-input bg-transparent flex-grow border-transparent focus:outline-none" />
              <div>
                  <button>
                      <FaSearch />
                  </button>
              </div>
          </form>
        </div>

      )}
      <ul className="flex space-x-5 my-auto text-white">
        <li className=" px-6 py-3 cursor-pointer rounded-3xl justify-center items-center flex text-center font-semibold font-['Inter']">Browse</li>
        <li className=" px-6 py-3 cursor-pointer rounded-3xl justify-center items-center flex text-center font-semibold font-['Inter']">Login</li>
        <li className=" px-6 py-3 cursor-pointer rounded-3xl justify-center items-center flex text-center font-semibold font-['Inter'] text-[#F08604] bg-white">Sign Up</li>
      </ul>
    </div>
  )
}

export default Nav