import React from 'react';
import { Link } from 'gatsby';
import { BiArrowToTop } from 'react-icons/bi';

const ToTop = ({ scroll }) => {
  return (
    <Link
      to='#home'
      className={` fixed right-6 rounded-full bg-primary p-3 text-2xl text-light shadow-md shadow-black transition-all delay-100 duration-300 xl:right-8 ${
        scroll
          ? ' pointer-events-auto bottom-6 opacity-100 xl:bottom-8'
          : ' pointer-events-none bottom-0 opacity-0'
      }`}
    >
      <BiArrowToTop />
    </Link>
  );
};

export default ToTop;
