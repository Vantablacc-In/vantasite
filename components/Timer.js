import React, { useEffect, useState } from "react";

const targetDate = new Date("February 14, 2023 00:00:00 GMT+5:30");

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
    <div className="flex-row space-y-5 font-sans font-style: italic text-center md:flex space-x-8 items-center justify-center my-20">
      <div>
        <span className="text-5xl md:text-9xl font-bold">{timeLeft.days}</span>
        <span className="text-lg">Days</span>
      </div>
      <div>
        <span className="text-5xl md:text-8xl font-bold">{timeLeft.hours}</span>
        <span className="text-lg">Hours</span>
      </div>
      <div>
        <span className="text-5xl md:text-7xl font-bold">{timeLeft.minutes}</span>
        <span className="text-lg">Minutes</span>
      </div>
      <div>
        <span className="text-5xl md:text-6xl font-bold">{timeLeft.seconds}</span>
        <span className="text-lg">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
