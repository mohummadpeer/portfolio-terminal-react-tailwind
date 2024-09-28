import React, { useState } from "react";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      <nav className="p-2">
        <ul className="hidden md:flex justify-center items-center md:flex-row md:justify-around font-semibold text-xl text-vert">
          <a href="#training">
            <li className="hover:cursor-pointer">Formations</li>
          </a>
          <a href="#works">
            <li className="hover:cursor-pointer">Expériences</li>
          </a>
          <a href="#fullstack">
            <li className="hover:cursor-pointer">Fullstack</li>
          </a>
          <a href="#devops">
            <li className="hover:cursor-pointer">Devops</li>
          </a>
          <a href="#projects">
            <li className="hover:cursor-pointer">Projets</li>
          </a>
        </ul>
        <div className="block flex pr-4 justify-end cursor-pointer md:hidden">
          <img
            onClick={() => setHamburger(!hamburger)}
            class="size-8"
            src="https://img.icons8.com/?size=64&id=Y9aaMCohZ2Md&format=png&color=40C057"
            alt="toggle"
          />
        </div>

        {/* Mobile nav */}
        {hamburger ? (
          <div className="block mt-4 md:hidden">
            <ul>
              <div className="flex flex-col p-4 rounded-xl bg-gray-200 text-black">
                <ul className="font-semibold">
                  <a href="#training">
                    <li className="hover:cursor-pointer mb-2">Formations</li>
                  </a>
                  <a href="#works">
                    <li className="hover:cursor-pointer mb-2">Expériences</li>
                  </a>
                  <a href="#fullstack">
                    <li className="hover:cursor-pointer mb-2">Fullstack</li>
                  </a>
                  <a href="#devops">
                    <li className="hover:cursor-pointer mb-2">Devops</li>
                  </a>
                  <a href="#projects">
                    <li className="hover:cursor-pointer">Projets</li>
                  </a>
                </ul>
              </div>
            </ul>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </nav>
    </>
  );
}
export default Navbar;
