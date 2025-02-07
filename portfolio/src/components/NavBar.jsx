import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Profile",
      path: "/"
    },
    {
      title: "Skills",
      path: "/skills"
    },
    {
      title: "Projects",
      path: "/projects"
    },
    {
      title: "More",
      path: "/contact"
    }
  ];

  return (
    <div className="w-full h-[8vh] grad-blue-bgs text-white flex justify-center items-center gap-4">
      <div className="w-[80%] h-full flex flex-row justify-center items-center">
        <div className="w-1/2 flex justify-start items-center font-extrabold text-3xl">PORTFOLIO</div>
        <ul className="w-1/2 flex justify-end items-center list-none gap-10 font-serif font-bold">
          {NavLinks.map((navdata, index) => (
            <NavLink
              key={index}
              to={navdata.path}
              className={({ isActive }) =>
                `px-3 py-2 text-lg border-b-2 ${
                  isActive ? 'border-green-300' : 'border-transparent'
                } hover:border-green-300 active:translate-y-1`
              }
            >
              <li>{navdata.title}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
