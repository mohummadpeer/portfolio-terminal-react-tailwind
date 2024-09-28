import React from "react";

function Navbar() {
  return (
    <>
      <nav className="p-2">
        <ul className="flex flex-col justify-center items-center md:flex-row md:justify-around font-semibold text-xl text-vert">
          <a href="#training"><li className="hover:cursor-pointer">Formations</li></a>
          <a href="#works"><li className="hover:cursor-pointer">Expériences</li></a>
          <a href="#fullstack"><li className="hover:cursor-pointer">Fullstack</li></a>
          <a href="#devops"><li className="hover:cursor-pointer">Devops</li></a>
          <a href="#projects"><li className="hover:cursor-pointer">Projets</li></a>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
