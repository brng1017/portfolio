import React, { useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';

const skills = [
  { name: 'JavaScript (ES6)', percent: 80 },
  { name: 'TypeScript', percent: 50 },
  { name: 'Express.js', percent: 60 },
  { name: 'Passport.js', percent: 50 },
  { name: 'React', percent: 60 },
];

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  });

  return (
    <section
      ref={revealContainer}
      id='about'
      className=' flex flex-col items-start justify-center py-16 md:py-32'
    >
      <h1 className=' relative py-4 text-3xl font-bold text-dark dark:text-light md:text-4xl'>
        About Me
        <span className='absolute bottom-0 left-1/2 h-1.5 w-16 -translate-x-1/2 transform bg-primary' />
      </h1>

      <div className=' flex flex-col items-start justify-center lg:flex-row lg:gap-8'>
        <p className=' w-full py-4 text-sm font-normal text-dark dark:text-light md:pt-8 md:text-base'>
          Welcome to my portfolio website! I am a passionate and experienced
          software engineer specializing in full stack development. With a
          strong foundation in front-end and back-end technologies, I create
          robust and efficient web applications that deliver exceptional user
          experiences. Explore my portfolio to discover a range of projects
          showcasing my skills in JavaScript, React, Node.js, and more. From
          responsive designs to scalable architectures, I bring innovation and
          attention to detail to every project. Let's connect!
        </p>
        <ul className=' w-full text-sm font-normal text-dark dark:text-light md:text-base lg:pt-6'>
          {skills.map((skill, index) => (
            <li key={index} className=' flex w-full flex-row py-2'>
              <p className=' w-40 whitespace-nowrap md:w-48'>{skill.name}</p>
              <div className=' w-full bg-lighter dark:bg-darker'>
                <div
                  className='h-full bg-primary'
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
