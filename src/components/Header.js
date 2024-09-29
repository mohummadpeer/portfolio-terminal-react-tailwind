import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import pdf from "../data/cv.pdf";
function Header() {
  return (
    <>
      <header>
        <Navbar />
        {/* <h1 id="title" className="my-4 font-ligth text-center text-2xl sm:text-3xl md:text-4xl bg-green-200 sm:bg-purple-300 md:bg-gray-300 lg:bg-blue-300 xl:bg-red-500"> */}
        <h1
          id="title"
          className="my-4 font-ligth text-center text-2xl sm:text-3xl md:text-4xl"
        >
          Mohummad PEER
        </h1>
        <div className="__movingtexts w-full flex flex-row">
          <h1 className="text-white text-2xl uppercase opacity-25">
            esprit d'equipe - adaptabilite - autonome{" "}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 overflow-hidden">
            <ul className="mx-4 md:m-4 flex flex-col text-xl">
              
              <li className="m-4 flex flex-row">
                <div className="min-w-12 text-vert">
                  <img
                    className="size-6 md:size-8"
                    src="https://img.icons8.com/?size=50&id=124166&format=png&color=40C057"
                    alt="email_pict"
                  />
                </div>
                <div>mohummad.peer@epitech.eu</div>
              </li>

              <li className="m-4 flex flex-row">
                <div className="min-w-12 text-vert">
                  <img
                    className="size-6 md:size-8"
                    src="https://img.icons8.com/?size=50&id=9730&format=png&color=40C057"
                    alt="phone_pict"
                  />
                </div>
                <div>07 83 97 49 82</div>
              </li>

              <li className="m-4 flex flex-row">
                <div className="min-w-12 text-vert">
                <img
                    className="size-6 md:size-8"
                    src="https://img.icons8.com/?size=100&id=7880&format=png&color=40C057"
                    alt="location_pict"
                  />
                </div>
                <div>13001 - Marseille</div>
              </li>

              <div className="m-4 flex flex-row justify-center gap-12">
                <li className="size-12">
                  <a href="https://github.com/mohummadpeer">
                    <img
                      src="https://img.icons8.com/win10/200/40C057/github.png"
                      alt="github"
                    />
                  </a>
                </li>
                <li className="size-12">
                  <a href="https://www.linkedin.com/in/mohummad-peer-18482919b/">
                    <img
                      src="https://img.icons8.com/win10/200/40C057/linkedin.png"
                      alt="linkedin"
                    ></img>
                  </a>
                </li>
                <li className="size-12">
                  <a class="" href={pdf} download="cv.pdf">
                    <img
                      src="https://img.icons8.com/?size=100&id=2l1x6CDEkJJU&format=png&color=40C057"
                      alt="cv"
                    ></img>
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden" id="info">
            <p className="p-8 text-justify text-xl">
              Actuellement étudiant en Architecte de systèmes d’information à
              Epitech en Prépa MSC PRO, je suis à la recherche d'une alternance
              qui débuterait en Janvier 2025 pour une durée de 33 mois.
            </p>
            <p className="p-8 text-justify text-xl">
              Fort de 7 ans d'expérience en tant que freelance, administrateur
              réseaux, développeur et hot-liner j’ai développé une expertise
              polyvalente et approfondie qui me permet d’aborder et de résoudre
              une variété de défis techniques avec efficacité et
              professionnalisme.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
