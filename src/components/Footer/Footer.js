import React from "react";

function Footer() {
  return (
    <>
      <section className="bg-gray-100 text-black">
        <div className="flex flex-col md:flex-row py-2 md:gap-12 justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <img
              className="size-8"
              src="https://img.icons8.com/?size=64&id=YmGEpwSSMTpy&format=png&color=40C057"
              alt="copy_pict"
            />
            <h2 className="pl-1">Copyright Mohummad PEER</h2>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img
              className="size-6 md:size-8"
              src="https://img.icons8.com/?size=50&id=9730&format=png&color=40C057"
              alt="phone_pict"
            />
            <h2 className="pl-2">07 83 97 49 82</h2>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img
              className="size-6 md:size-8"
              src="https://img.icons8.com/?size=50&id=124166&format=png&color=40C057"
              alt="email_pict"
            />
            <h2 className="pl-2">mohummad.peer@epitech.eu</h2>
          </div>
        </div>
      </section>
    </>
  );
}
export default Footer;
