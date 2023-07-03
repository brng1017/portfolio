import React, { useState, useEffect, useRef } from 'react';
import { srConfig } from '../config';
import sr from '../utils/sr';
import { sendForm } from '@emailjs/browser';

import { TextInput } from '../components';

const Contact = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  });

  const sendEmail = e => {
    e.preventDefault();

    sendForm(
      process.env.GATSBY_EMAIL_ID,
      'template_bpaamks',
      e.target,
      process.env.GATSBY_EMAIL_KEY
    )
      .then(response => {
        console.log('Email sent', response.status);
        console.log(e.target);

        setEmailSent(true);
        setShowStatus(true);
        setTimeout(() => {
          setShowStatus(false);
          setEmailSent(false);
        }, 5000);
      })
      .catch(error => {
        console.log('Email failed', error);

        setShowStatus(true);
        setTimeout(() => {
          setShowStatus(false);
        }, 5000);
      });
  };

  return (
    <section
      ref={revealContainer}
      id='contact'
      onSubmit={sendEmail}
      className=' flex flex-col items-start justify-center py-32 md:m-auto md:max-w-2xl'
    >
      <h1 className=' relative py-4 text-3xl font-bold text-dark dark:text-light md:text-4xl'>
        Contact Me
        <span className='absolute bottom-0 left-1/2 h-1.5 w-16 -translate-x-1/2 transform bg-primary' />
      </h1>

      <p className=' relative py-4 text-sm text-dark dark:text-light md:pt-8 md:text-base'>
        I'm always keen to connect with like-minded professionals and explore
        potential collaborations. Feel free to reach out using the contact form
        below, and let's start a conversation.
      </p>

      <form className=' relative w-full py-4'>
        <TextInput name='name' type='text' inner='Name' />
        <TextInput name='email' type='email' inner='Email address' />
        <TextInput name='subject' type='text' inner='Subject' />

        <div className='relative mb-3' data-te-input-wrapper-init>
          <textarea
            className=' peer block w-full appearance-none border-0 border-b-2 border-maingray bg-transparent px-0 py-2.5 text-sm text-dark focus:border-primary focus:outline-none focus:ring-0 dark:border-maingray dark:text-light dark:focus:border-primary'
            name='message'
            id='message'
            rows='5'
            placeholder=' '
            required
          ></textarea>
          <label
            htmlFor='message'
            className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-maingray duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-primary dark:text-maingray peer-focus:dark:text-primary'
          >
            Message
          </label>
        </div>

        <div className=' flex flex-row items-center justify-start py-4'>
          <button
            type='submit'
            className='group relative inline-flex items-center justify-start overflow-hidden rounded bg-dark py-3 pl-4 pr-12 font-semibold text-light transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 dark:bg-light dark:text-primary'
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
              Submit
            </span>
          </button>

          {showStatus &&
            (emailSent ? (
              <p className=' px-4 text-sm text-green-600'>
                Email sent successfully!
              </p>
            ) : (
              <p className=' px-4 text-sm text-red-600'>Email failed.</p>
            ))}
        </div>
      </form>
    </section>
  );
};

export default Contact;
