import React from "react";

function WorksCard({ details }) {
  return (
    <>
      <div className="px-12 py-4">
        <h6 className="text-blue-200 font-semibold text-xl rounded-md mb-2 pl-4" id="school">
          {details.title}
        </h6>
        <div className="flex flex-col md:flex-row justify-between">
          <div
            before="| - - "
            className="before:content-[attr(before)] pl-8 font-bold text-lg"
          >
            {details.society}
          </div>
          <div className="pl-12 md:pl-0 font-bold text-lg">{details.date}</div>
        </div>

        <ul className="pl-8 md:pl-12 list-none">
          {details.responsabilities.map((item) => (
            <li
              before="| - - "
              className="before:content-[attr(before)] py-2"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default WorksCard;
