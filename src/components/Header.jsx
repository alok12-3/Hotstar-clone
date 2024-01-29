import React, { useState, useEffect } from 'react';
import logo from './../assets/Screenshot_from_2023-12-29_19-30-32-removebg-preview.png';
import profile from './../assets/profilepic.png';
import { HiHome, HiArchive, HiBeaker, HiChartBar, HiBookOpen, HiBookmarkAlt, HiDotsVertical } from 'react-icons/hi';
import Headeritem from './Headeritem';

function Header() {
  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiArchive },
    { name: 'WATCHLIST', icon: HiBeaker },
    { name: 'ORIGINALS', icon: HiChartBar },
    { name: 'MOVIES', icon: HiBookOpen },
    { name: 'SERIES', icon: HiBookmarkAlt },
  ];

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setToggle(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex items-center justify-between p-5'>
      
      
      <div className='flex gap-8 items-center'>
        
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt='Logo' />
       
        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <Headeritem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
       
       
       
        <div className='flex md:hidden gap-5'>
          {menu.slice(0, 3).map((item) => (
            <Headeritem key={item.name} name='' Icon={item.icon} />
          ))}
        
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <Headeritem name='' Icon={HiDotsVertical} />
            {toggle ? (
              
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.slice(3).map((item) => (
                  <Headeritem key={item.name} name={item.name} Icon={item.icon} />
                ))}
              </div>

            ) : null}

          </div>

        </div>
        
      </div>

      <img src={profile} className='w-[40px] rounded-full' alt='Profile' />
                  
    </div>
  );
}

export default Header;
