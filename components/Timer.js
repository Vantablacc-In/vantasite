import React, { useEffect, useState } from "react";

const targetDate = new Date("March 10, 2023 00:00:00 GMT+5:30");

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col font-sans md:flex-row md:space-x-20 justify-center items-center space-y-2 md:space-y-0 md:-mt-6">
      <div className="text-center">
        <span className="text-4xl md:text-6xl font-bold">{timeLeft.days}</span>
        <span className="text-xs md:text-sm block mt-1">Days</span>
      </div>
      <div className="text-center">
        <span className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</span>
        <span className="text-xs md:text-sm block mt-1">Hours</span>
      </div>
      <div className="text-center">
        <span className="text-4xl md:text-6xl font-bold">
          {timeLeft.minutes}
        </span>
        <span className="text-xs md:text-sm block mt-1">Minutes</span>
      </div>
      <div className="text-center">
        <span className="text-4xl md:text-6xl font-bold">
          {timeLeft.seconds}
        </span>
        <span className="text-xs md:text-sm block mt-1">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
