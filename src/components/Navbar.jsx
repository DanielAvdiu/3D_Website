import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  // Listen for scroll events and update scrollY state
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate opacity based on scroll position
  const maxScroll = 200; // Adjust this value to control when the background becomes fully transparent
  const opacity = Math.min(scrollY / maxScroll, 1);

  // Apply the opacity to the navbar background
  const navbarStyle = {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav id='the_only_element' className={`${styles.paddingX}
    w-full flex items-center py-3 fixed top-0 z-20
    `} style={navbarStyle}>

      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>

        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >

              <a href={`#${link.id}`}>{link.title}</a>

            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 max-4 my-2 min-w-[550px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >

                  <a href={`#${link.id}`}>{link.title}</a>

                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </nav>
  )
}


export default Navbar