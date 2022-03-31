import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
   return (
      <nav className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
         <div className='hidden md:block'>
            <h2 className='text-4xl font-bold font-sans text-gray-600'><Link to='/'>CryptoCoin</Link></h2>
         </div>
         <div className='menu flex gap-5 text-xl'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/coins'>Coins</CustomLink>
            <CustomLink to='/contact'>Contact</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
         </div>
      </nav>
   );
};

export default Header;