import React from "react";
import fullstack from "../../data/fullstack.json";

function Fullstack() {
  return (
    <>
      <div id="fullstack">
        <h2 className="text-left text-xl p-4" id="title">
          <span className="text-red-600"> $ > </span>
          <span className="text-vert">cat ./Compétences Full Stack</span>
        </h2>

        <div className="flex flex-wrap">
          {fullstack.map((data) => (
            <>
              <div className="w-1/3" key={data.id}>
              <div className="flex flex-col mb-12">
                  <img className="m-auto size-16 md:size-20" src={data.imageSrc} alt="" />
                  <h3 className="m-auto pt-2 font-bold text-sm md:text-xl">{data.title}</h3>
              </div>
                  
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default Fullstack;
