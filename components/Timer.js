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
    <div className="flex-row space-y-7 md:space-x-12 font-mono font-family: menlo font-style: italic font-light text-center md:flex items-center justify-center mt-12">
      <div>
        <span className="text-5xl md:text-9xl font-extrabold">{timeLeft.days}</span>
        <div className="text-lg items-center">Days</div>
      </div>
      <div>
        <span className="text-5xl md:text-8xl font-extrabold">{timeLeft.hours}</span>
        <div className="text-lg">Hours</div>
      </div>
      <div>
        <span className="text-5xl md:text-7xl font-extrabold">{timeLeft.minutes}</span>
        <div className="text-lg">Minutes</div>
      </div>
      <div>
        <span className="text-5xl md:text-6xl font-extrabold">{timeLeft.seconds}</span>
        <div className="text-lg">Seconds</div>
      </div>
    </div>
  );
};

export default Timer;
