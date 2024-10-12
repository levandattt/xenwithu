import React from 'react';
import BrandLogo from '../BrandLogo';
import { default as NavLink } from './Button';
interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = () => (
  <div className={`py-3 px-10 flex items-center justify-between max-md:justify-center`}>
    <BrandLogo link="/">Xenwithu</BrandLogo>
    <div className={`max-md:hidden flex flex-wrap justify-between font-semibold `}>
        <div className={`flex hover:shadow-primary hover:bg-light-primary-bg-alpha rounded-md py-3`}>
          <NavLink link="#Home">Home</NavLink>
        </div>
        <div className={`flex hover:shadow-primary hover:bg-light-primary-bg-alpha rounded-md py-3`}>
          <NavLink link="#Skill">Skill</NavLink>
        </div>
        <div className={`flex hover:shadow-primary hover:bg-light-primary-bg-alpha rounded-md py-3`}>
          <NavLink link="#Experience">Experience</NavLink>
        </div>
        <div className={`flex hover:shadow-primary hover:bg-light-primary-bg-alpha rounded-md py-3`}>
          <NavLink link="#Education">Education</NavLink>
        </div>
        <div className={`flex hover:shadow-primary hover:bg-light-primary-bg-alpha rounded-md py-3`}>
          <NavLink link="#Resume">Resume</NavLink>
        </div>
        <div className={`flex hover:shadow-primary hover:bg-light-primary-bg-alpha rounded-md py-3`}>
          <NavLink link="#Blog">Blog</NavLink>
        </div>
        <div className={`flex hover:shadow-primary hover:bg-light-primary-bg-alpha rounded-md py-3`}>
          <NavLink link="#Contact">Contact</NavLink>
        </div>
    </div>
  </div>
);

export default Header;