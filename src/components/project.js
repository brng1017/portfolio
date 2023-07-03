import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = ({ node, index }) => {
  const { frontmatter, html } = node;
  const { title, github, url, image, technologies } = frontmatter;
  const cover = getImage(image);
  return (
    <div
      key={index}
      className=' project block overflow-hidden rounded-lg bg-lighter shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-darker'
    >
      <div className=' relative h-80 md:h-64'>
        <GatsbyImage
          className=' h-full w-auto object-cover'
          image={cover}
          alt={title}
        />
        <Link
          className=' absolute left-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'
          to={url ? url : '#'}
          target='_blank'
          rel='noopener noreferrer'
        />
      </div>

      <div className=' relative flex flex-col items-start justify-start gap-1 overflow-hidden p-4'>
        <h3 className=' text-2xl font-extrabold text-dark dark:text-light md:text-xl'>
          {title}
        </h3>

        <div className=' flex flex-row items-center justify-start gap-2 text-sm text-maingray md:text-xs'>
          {technologies.length &&
            technologies.map((tech, index) => <span key={index}>{tech}</span>)}
        </div>

        <div
          className=' text-base text-dark dark:text-light md:text-sm'
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className=' flex flex-row items-center justify-start'>
          {github && (
            <Link
              className=' icon py-3 pr-3 text-xl'
              to={github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiGithub />
            </Link>
          )}
          {url && (
            <Link
              className=' icon py-3 pr-3 text-xl'
              to={url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiExternalLink />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
