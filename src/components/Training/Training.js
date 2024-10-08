import React from "react";
import { TRAINING_EXPERIENCE } from "../../data/training";
import TrainingCard from "./TrainingCard";

function Training() {
  return (
    <>
      <section id="training">
        <h2 className="text-left text-xl p-4" id="title">
          <span className="text-red-500 font-semibold"> $ > </span>
          <span className="text-vert font-semibold">ls -la ~/Formations</span>
        </h2>
        <div className="">
          {TRAINING_EXPERIENCE.map((item) => (
            <TrainingCard key={item.school} details={item} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Training;
