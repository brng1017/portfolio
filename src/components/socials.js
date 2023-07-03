import React from 'react';

import { FiLinkedin, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';

const Socials = () => {
  return (
    <div className=' relative flex flex-row items-center justify-center py-2 md:fixed md:left-0 md:top-0 md:h-screen md:flex-col md:p-0'>
      <a
        className=' icon p-4 text-2xl'
        href='https://www.linkedin.com/in/bryant-nguyen-096245171/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FiLinkedin />
      </a>

      <a
        className=' icon p-4 text-2xl'
        href='https://github.com/brng1017'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FiGithub />
      </a>

      <a
        className=' icon p-4 text-2xl'
        href='https://www.instagram.com/brynt.ngyn/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FiInstagram />
      </a>

      <a
        className=' icon p-4 text-2xl'
        href='mailto:nguyenbryant10@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FiMail />
      </a>
    </div>
  );
};

export default Socials;
