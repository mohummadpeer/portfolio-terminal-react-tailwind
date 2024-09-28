import React from "react";

function WorksCard({ details }) {
  return (
    <>
      <div className="p-4">
        <h6 className="text-xl mb-2 font-bold" id="school">
          {details.title}
        </h6>
        <div className="flex flex-row justify-between">
          <div className="pl-4 text-lg">{details.society}</div>
          <div className="pl-4 text-lg">{details.date}</div>
        </div>

        <ul className="pl-8 list-disc">
          {details.responsabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default WorksCard;
