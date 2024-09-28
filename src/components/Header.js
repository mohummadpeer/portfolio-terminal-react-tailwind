import React from "react";
import pdf from "../data/cv.pdf"
function Header() {
  return (
    <>
      <header>
        <h1 className="my-4 font-ligth text-center text-4xl">Mohummad_PEER</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 overflow-hidden">
            <ul className="m-4 flex flex-col text-lg md:text-xl">
              <li className="m-4 flex flex-row">
                <div className="min-w-36 md:min-w-40 text-vert">Email :</div>
                <div class="Value">mohummad.peer@epitech.eu</div>
              </li>

              <li className="m-4 flex flex-row">
                <div className="min-w-36 md:min-w-40 text-vert">
                  Téléphone :
                </div>
                <div class="Value">07 83 97 49 82</div>
              </li>

              <li className="m-4 flex flex-row">
                <div className="min-w-40 text-vert">Ville</div>
                <div class="Value">13001 - Marseille</div>
              </li>

              <div className="m-4 flex flex-row gap-8">
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
                 <a class="" href={pdf} download="cv.pdf" target="_blank">
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
