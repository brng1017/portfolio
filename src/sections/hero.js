import React, { useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';

import { Button } from '../components';
import Resume from '../../static/resume.pdf';

const Hero = () => {
  const revealHero = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    revealHero.forEach((ref, index) => {
      if (ref.current) {
        sr.reveal(ref.current, srConfig(800 + index * 100, undefined, '#home'));
      }
    });
  }, []);

  return (
    <section
      id='home'
      className=' flex h-screen flex-col items-start justify-center gap-2 md:m-auto md:w-max'
    >
      <h5
        ref={revealHero[0]}
        className=' invisible z-10 text-lg font-semibold text-primary md:text-xl lg:text-2xl'
      >
        Hi there, I'm
      </h5>
      <h1
        ref={revealHero[1]}
        className=' invisible z-10 text-4xl font-bold text-dark dark:text-light md:text-5xl lg:text-6xl'
      >
        Bryant Nguyen.
      </h1>
      <h2
        ref={revealHero[2]}
        className=' invisible z-10 text-3xl font-bold text-maingray md:text-4xl lg:text-5xl'
      >
        Software engineer.
      </h2>
      <div
        ref={revealHero[3]}
        className=' invisible z-10 md:max-w-lg lg:max-w-xl'
      >
        <p className=' text-sm text-dark dark:text-light md:text-base lg:text-lg'>
          With a strong background in software engineering, I specialize in the
          development, deployment, and maintenance of robust web applications
          and APIs. I excel at creating efficient solutions that drive
          exceptional user experiences.
        </p>
      </div>
      <div ref={revealHero[4]} className=' invisible py-4'>
        <Button text='Resume' reference={Resume} />
      </div>
    </section>
  );
};

export default Hero;
