import React from "react";
import { WORKS_EXPERIENCE } from "../../data/works";
import WorksCard from "./WorksCard";

function Works() {
  return (
    <>
      <section className="" id="works">
        <h2 className="text-left text-xl p-4">
          <span className="text-red-600"> $ > </span>
          <span className="text-vert">echo -e Expériences Professionnelles</span>
        </h2>
        <div className="">
          {WORKS_EXPERIENCE.map((item) => (
            <WorksCard key={item.title} details={item} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Works;
