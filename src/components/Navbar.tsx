import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaMapMarkerAlt, FaUserFriends, FaWallet } from "react-icons/fa";
import { useState } from 'react';

export function Navbar() {
  const [nav, setNav] = useState<boolean>(false);

  function handleOpenOrCloseNav() {
    setNav(!nav);
  }

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={handleOpenOrCloseNav}>
          <AiOutlineMenu size={40} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Churrascaria <span className="font-bold">O Pitas</span>
        </h1>
      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sw:w-[400px] lg:w-[500]'>
        <AiOutlineSearch size={20} />
        <input type="text" placeholder='Search foods' className='bg-transparent p-2 focus:outline-none w-full' />
      </div>

      <button className='bg-black text-white hidden md:flex items-center gap-2 py-2 rounded-full'>
        <FaMapMarkerAlt size={20} />
        Directions
      </button>

      {nav && <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}
      
      <div 
        className={
          nav 
          ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
          : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={handleOpenOrCloseNav} />
        <h2 className='text-2xl p-4'>
          Lets <span className='font-bold'>Eats</span>
        </h2>

        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' />
              Orders
            </li>
            <li className='text-xl py-4 flex'>
              <MdFavorite size={25} className='mr-4' />
              Favorites
            </li>
            <li className='text-xl py-4 flex'>
              <FaWallet size={25} className='mr-4' />
              Wallet
            </li>
            <li className='text-xl py-4 flex'>
              <MdHelp size={25} className='mr-4' />
              Help
            </li>
            <li className='text-xl py-4 flex'>
              <AiFillTag size={25} className='mr-4' />
              Promotions
            </li>
            <li className='text-xl py-4 flex'>
              <BsFillCartFill size={25} className='mr-4' />
              Best Ones
            </li>
            <li className='text-xl py-4 flex'>
              <FaUserFriends size={25} className='mr-4' />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
