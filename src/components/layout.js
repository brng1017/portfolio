import * as React from 'react';
import { useState, useEffect } from 'react';

import { Nav, Socials, Footer, ToTop, Particle } from '../components';

const isSSR = typeof window !== 'undefined';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (isSSR) {
      const root = window.document.documentElement;

      if (darkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [darkMode]);

  useEffect(() => {
    if (isSSR) {
      window.addEventListener('scroll', () => {
        setScroll(window.scrollY > 20);
      });
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className={`content ${darkMode ? 'dark' : ''}`}>
        <Nav
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          scroll={scroll}
        />

        <Particle darkMode={darkMode} />

        <main>{children}</main>

        <Socials />
        <ToTop scroll={scroll} />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
