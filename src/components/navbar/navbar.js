import React from 'react';
import Blog from './blog';
import Contact from './contact';
import Resume from './resume';

const Navbar = () => {
  return (
    <div className="navbar">
      <Blog className="blog" />
      <Resume className="resume" />
      <Contact className="contact" />
    </div>
  );
};

export default Navbar;
