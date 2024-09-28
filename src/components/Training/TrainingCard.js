import React from "react";

function TrainingCard({ details }) {
  return (
    <>
      <div className="px-8 md:px-12 mb-4">
        <h6 className="bg-gray-300 text-black font-semibold text-xl rounded-md mb-2 pl-4" id="school">
          {details.school}
        </h6>
        <div className="pl-4">{details.date}</div>
        <div className="pl-4">{details.titled}</div>
      </div>
    </>
  );
}
export default TrainingCard;