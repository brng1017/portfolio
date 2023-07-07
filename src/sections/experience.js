import React, { useState, useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';
import { useStaticQuery, graphql } from 'gatsby';

const Experience = () => {
  const [activeCard, setActiveCard] = useState(0);
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const data = useStaticQuery(graphql`
    query {
      experience: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/content/experience/" } }
        sort: { frontmatter: { number: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              company
              location
              range
              title
              url
            }
            html
          }
        }
      }
    }
  `);

  const expData = data.experience.edges;

  return (
    <section
      ref={revealContainer}
      id='experience'
      className=' flex flex-col items-start justify-center py-16 md:py-32'
    >
      <h1 className=' relative py-4 text-3xl font-bold text-dark dark:text-light md:text-4xl'>
        Experience
        <span className='absolute bottom-0 left-1/2 h-1.5 w-16 -translate-x-1/2 transform bg-primary' />
      </h1>

      <div className=' relative flex w-full flex-col items-start justify-center pt-4 md:flex-row md:pt-8'>
        <div className='relative w-full overflow-x-auto md:w-44'>
          <div className=' relative flex w-max flex-row md:inline-flex md:h-max md:w-auto md:flex-col'>
            {expData &&
              expData.map(({ node }, index) => {
                const { company } = node.frontmatter;
                return (
                  <button
                    key={index}
                    // isActive={activeCard === index}
                    onClick={() => setActiveCard(index)}
                    className={` flex h-12 w-32 items-center justify-center whitespace-nowrap px-4 text-sm transition-all duration-300 ease-linear hover:text-primary md:text-base ${
                      activeCard === index ? 'text-primary' : 'text-maingray'
                    }`}
                  >
                    {company}
                  </button>
                );
              })}

            <div
              className=' absolute bottom-0 left-0 top-auto h-[2px] w-32 bg-primary transition-all duration-300 ease-in-out md:hidden'
              style={{ transform: `translateX(${activeCard * 128}px)` }}
            ></div>
            <div
              className=' absolute left-0 right-auto top-0 hidden h-12 w-[3px] bg-primary transition-all duration-300 ease-in-out md:block'
              style={{ transform: `translateY(${activeCard * 48}px)` }}
            ></div>
          </div>
        </div>

        <div className=' relative w-full'>
          {expData &&
            expData.map(({ node }, index) => {
              const { frontmatter, html } = node;
              const { title, company, range, location, url } = frontmatter;
              return (
                <div
                  key={index}
                  className={` relative flex flex-col gap-2 py-4 md:pt-0 ${
                    activeCard !== index ? 'hidden' : ''
                  }`}
                >
                  <h3 className=' text-xl font-bold text-dark dark:text-light lg:text-2xl'>
                    {title}
                  </h3>
                  <a
                    className=' link w-max text-base text-primary lg:text-lg'
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {company}
                  </a>
                  <h4 className=' text-sm text-dark dark:text-light lg:text-base'>
                    {range}
                  </h4>
                  <h4 className=' text-sm text-dark dark:text-light lg:text-base'>
                    {location}
                  </h4>
                  <div
                    className=' job text-sm text-maingray lg:text-base'
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
