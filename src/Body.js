import {
  faCalendarDays,
  faCirclePause,
  faCirclePlay,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import moment from "moment";

function Body({ runBtn, setRunBtn, startTime, startBtn }) {
  const date = moment().format("DD/MM/YYYY");
  const time = moment(new Date().getTime()).format("hh:mm:ss A");

  const [endTime, setEndTime] = useState(null);

  const [timeLeft, setTimeLeft] = useState(60);
  const [stopVisible, setStopVisible] = useState(true);

  useEffect(() => {
    let interval;
    if (runBtn) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [runBtn]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / 60) * circumference;

  const handleStart = () => {
    setRunBtn(true);
    setStopVisible(true);
  };
  const handleStop = () => {
    setRunBtn(false);
    setEndTime(time);
  };

  return (
    <div className="flex justify-between bg-gray-200 p-12 m-16">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faCalendarDays} />
        <label>Datum</label>
        <input
          className="p-2 rounded-lg w-[110px] border border-black bg-yellow-50"
          type="text"
          value={date}
        />
      </div>

      <div className="relative">
        <div className="circle-progress">
          <svg className="progress-circle" width="120" height="120">
            <circle
              className="progress-ring__background"
              stroke="rgb(128, 128, 128"
              strokeWidth="8"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
            />
            <circle
              className="progress-ring__circle"
              stroke="rgb(28, 202, 102)"
              strokeWidth="8"
              fill="transparent"
              r={radius}
              cx="60"
              cy="60"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 60 60)"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center text-green-400 font-bold text-xl absolute top-8 left-8">
          {`0${minutes}`}:{seconds < 10 ? `0${seconds}` : seconds}
          <button className="cursor-pointer">
            {runBtn ? (
              <FontAwesomeIcon
                color="blue"
                icon={faCirclePause}
                onClick={() => {
                  setRunBtn(false);
                  setStopVisible(false);
                  // setEndTime(time);
                }}
              />
            ) : (
              <FontAwesomeIcon
                className={
                  !startBtn ? "text-gray-400 disabled:" : "text-red-400"
                }
                icon={faCirclePlay}
                onClick={handleStart}
              />
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center relative h-40">
        <div className="flex items-center justify-between  w-96">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faClock} />
            <label>Angangzeit</label>
          </div>
          <input
            className="p-2 rounded-lg w-[110px] border border-black bg-yellow-50"
            type="text"
            value={startTime}
          />
        </div>
        <div className="flex items-center justify-between w-96">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faClock} />
            <label>Endzeit</label>
          </div>
          <input
            className="p-2 rounded-lg w-[110px] border border-black bg-yellow-50"
            type="text"
            value={endTime}
          />
        </div>
        {stopVisible && (
          <div className="absolute right-0 bottom-0">
            <button
              className="bg-red-600 font-bold text-white p-2 rounded-md"
              onClick={handleStop}
            >
              STOP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
