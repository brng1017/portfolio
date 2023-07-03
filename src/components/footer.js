import React from 'react';
import { TbBrandGatsby, TbBrandReact, TbBrandTailwind } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className=' flex w-full flex-col items-center justify-center pb-10 pt-4'>
      <p className=' text-sm text-maingray lg:text-base'>
        Built by Bryant Nguyen
      </p>

      <div className=' flex flex-row items-center justify-center gap-2 pt-1 text-base text-maingray lg:text-lg'>
        <TbBrandGatsby />
        <TbBrandReact />
        <TbBrandTailwind />
      </div>
    </footer>
  );
};

export default Footer;
