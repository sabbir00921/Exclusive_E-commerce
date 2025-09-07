import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

const Timer = () => {
  const [time, setTime] = useState(2 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const worker = new Worker(
      new URL("./../../CountDownWorker.js", import.meta.url)
    );
    worker.postMessage(time);
    worker.onmessage = (e) => {
      setTime(e.data);
    };
  }, []);

  // format time into days, hours, minutes, seconds
  const formatDate = (milisecond = time) => {
    let totalSeconds = Math.floor(milisecond / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    totalSeconds %= 3600 * 24;

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const { days, hours, minutes, seconds } = formatDate(time);

  return (
    <div className="flex items-center gap-x-2">
      <div className="flex flex-col items-start gap-y-2">
        <span className="font-poppins font-medium text-[12px] text-black">
          Days
        </span>
        <div className="flex items-center gap-x-2 ">
          <p className="text-black font-bold font-inter text-[32px] leading-none">
            {days}
          </p>
          <FaEllipsisV className="text-xl text-red" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-y-2">
        <span className="font-poppins font-medium text-[12px] text-black">
          Hours
        </span>
        <div className="flex items-center gap-x-2">
          <p className="text-black font-bold font-inter text-[32px] leading-none">
            {hours}
          </p>
          <FaEllipsisV className="text-xl text-red" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-y-2">
        <span className="font-poppins font-medium text-[12px] text-black">
          Minutes
        </span>
        <div className="flex items-center gap-x-2">
          <p className="text-black font-bold font-inter text-[32px] leading-none">
            {minutes}
          </p>
          <FaEllipsisV className="text-xl text-red" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-y-2">
        <span className="font-poppins font-medium text-[12px] text-black">
          Seconds
        </span>
        <div className="flex items-center">
          <p className="text-black font-bold font-inter text-[32px] leading-none">
            {seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
