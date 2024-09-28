import React from "react";
import { TRAINING_EXPERIENCE } from "../../data/training";
import TrainingCard from "./TrainingCard";

function Training() {
  return (
    <>
      <section className="" id="training">
        <h2 className="text-left text-xl p-4">
          <span className="text-red-600"> $ > </span>
          <span className="text-vert">ls -la ~/Formations</span>
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
