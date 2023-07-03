import React from 'react';

const Button = ({ text, reference }) => {
  return (
    <a
      href={reference}
      className='group relative inline-flex items-center justify-start overflow-hidden rounded bg-dark py-3 pl-4 pr-12 font-semibold text-light transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 dark:bg-light dark:text-primary'
      target='_blank'
      rel='noopener noreferrer'
    >
      <span className='absolute bottom-0 left-0 h-1 w-full bg-primary transition-all duration-150 ease-in-out group-hover:h-full'></span>
      <span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
        <svg
          className='h-5 w-5 text-light dark:text-dark'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M14 5l7 7m0 0l-7 7m7-7H3'
          ></path>
        </svg>
      </span>
      <span className='absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0'>
        <svg
          className='h-5 w-5 text-light dark:text-dark'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M14 5l7 7m0 0l-7 7m7-7H3'
          ></path>
        </svg>
      </span>
      <span className='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-light'>
        {text}
      </span>
    </a>
  );
};

export default Button;
