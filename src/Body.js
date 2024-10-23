import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import moment from "moment";

function Body() {
  const date = moment().format("DD/MM/YYYY");
  console.log(moment().format("DD/MM/YYYY"));
  return (
    <div className="bg-gray-200 p-12 m-16">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faCalendarDays} />
        <label>Datum</label>
        <input
          className="p-2 rounded-lg w-[110px] border border-black bg-yellow-50"
          type="text"
          value={date}
        />
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-center justify-between  w-96">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faClock} />
            <label>Angangzeit</label>
          </div>
          <input
            className="p-2 rounded-lg w-[110px] border border-black bg-yellow-50"
            type="time"
          />
        </div>
        <div className="flex items-center justify-between w-96">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faClock} />
            <label>Endzeit</label>
          </div>
          <input
            className="p-2 rounded-lg w-[110px] border border-black bg-yellow-50"
            type="time"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
