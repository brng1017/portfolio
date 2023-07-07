import React, { useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';
import { useStaticQuery, graphql } from 'gatsby';

import { Project } from '../components';

const Projects = () => {
  const revealHeader = useRef(null);
  const revealProjects = useRef(null);

  useEffect(() => {
    sr.reveal(revealHeader.current, srConfig());
    sr.reveal('.project', srConfig(undefined, 200));
  }, []);

  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/content/projects/" } }
        sort: { frontmatter: { number: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              github
              url
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              technologies
            }
            html
          }
        }
      }
    }
  `);

  const projectData = data.projects.edges;

  return (
    <section
      id='projects'
      className=' flex flex-col items-start justify-center py-32'
    >
      <h1
        ref={revealHeader}
        className=' relative py-4 text-3xl font-bold text-dark dark:text-light md:text-4xl'
      >
        Projects
        <span className='absolute bottom-0 left-1/2 h-1.5 w-16 -translate-x-1/2 transform bg-primary' />
      </h1>

      <div
        ref={revealProjects}
        className=' relative grid grid-flow-row auto-rows-max grid-cols-1 gap-5 py-4 md:grid-cols-2 md:pt-8 xl:grid-cols-3'
      >
        {projectData &&
          projectData.map(({ node }, index) => (
            <Project key={index} node={node} index={index} />
          ))}
      </div>
    </section>
  );
};

export default Projects;
