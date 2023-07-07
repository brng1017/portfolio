import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { Squash as Hamburger } from 'hamburger-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { srConfig } from '../config';
import sr from '../utils/sr';

import DarkLogo from '../images/logo-dark.png';
import LightLogo from '../images/logo-light.png';

const Nav = ({ darkMode, toggleDarkMode, scroll }) => {
  const [showNav, setShowNav] = useState(false);
  const revealLinks = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    revealLinks.forEach((ref, index) => {
      sr.reveal(
        ref.current,
        srConfig(index * 100, undefined, undefined, '#navbar')
      );
    });
  }, []);

  const handleSideNav = () => {
    setShowNav(false);
  };

  return (
    <nav
      id='navbar'
      className={` fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 transition-all duration-150 ease-linear ${
        scroll ? ' h-14 bg-lighter dark:bg-darker' : ' h-20 bg-transparent'
      }`}
    >
      <Link to='#home'>
        <img
          className=' h-8'
          src={darkMode ? LightLogo : DarkLogo}
          alt='Bryant Nguyen'
        />
      </Link>

      <div className=' hidden h-full md:block'>
        <div className=' flex h-full flex-row items-center justify-center text-base'>
          <Link
            ref={revealLinks[0]}
            className=' link invisible flex h-full items-center justify-center px-6 hover:text-primary'
            to='#about'
          >
            About
          </Link>
          <Link
            ref={revealLinks[1]}
            className=' link invisible flex h-full items-center justify-center px-6 hover:text-primary'
            to='#experience'
          >
            Experience
          </Link>
          <Link
            ref={revealLinks[2]}
            className=' link invisible flex h-full items-center justify-center px-6 hover:text-primary'
            to='#projects'
          >
            Projects
          </Link>
          <Link
            ref={revealLinks[3]}
            className=' link invisible flex h-full items-center justify-center pl-6 pr-8 hover:text-primary'
            to='#contact'
          >
            Contact
          </Link>

          <DarkModeSwitch
            size={20}
            checked={darkMode}
            onChange={toggleDarkMode}
            moonColor='#EDF2F4'
            sunColor='#2B2D42'
          />
        </div>
      </div>

      {/* SideNav */}
      <div className=' md:hidden'>
        <div className=' relative z-50 text-primary'>
          <Hamburger size={24} toggled={showNav} toggle={setShowNav} />
        </div>

        <div
          className={`${
            showNav ? 'sidenav' : ''
          } fixed -right-3/4 top-0 z-40 flex h-full w-3/4 items-center justify-center bg-lighter transition-all delay-300 ease-in-out dark:bg-darker`}
        >
          <div className=' flex h-full flex-col items-center justify-center gap-10 text-3xl'>
            <Link
              className=' link hover:text-primary'
              to='#about'
              onClick={handleSideNav}
            >
              About
            </Link>
            <Link
              className=' link hover:text-primary'
              to='#experience'
              onClick={handleSideNav}
            >
              Experience
            </Link>
            <Link
              className=' link hover:text-primary'
              to='#projects'
              onClick={handleSideNav}
            >
              Projects
            </Link>
            <Link
              className=' link hover:text-primary'
              to='#contact'
              onClick={handleSideNav}
            >
              Contact Me
            </Link>

            <DarkModeSwitch
              checked={darkMode}
              onChange={toggleDarkMode}
              moonColor='#EDF2F4'
              sunColor='#2B2D42'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
