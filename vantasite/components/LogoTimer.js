import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function LogoTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endTime = new Date("February 14, 2023 00:00:00 GMT+5:30");
    const endTimeInSeconds = (Date.parse(endTime)) / 1000;

    const now = new Date();
    const nowInSeconds = (Date.parse(now) / 1000);

    const secondsLeft = endTimeInSeconds - nowInSeconds;

    const days = Math.floor(secondsLeft / 86400);
    const hours = Math.floor((secondsLeft - (days * 86400)) / 3600);
    const minutes = Math.floor((secondsLeft - (days * 86400) - (hours * 3600)) / 60);
    const seconds = Math.floor((secondsLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    setTimeLeft({
      days,
      hours: hours < 10 ? '0' + hours : hours,
      minutes: minutes < 10 ? '0' + minutes : minutes,
      seconds: seconds < 10 ? '0' + seconds : seconds
    });
  }, []);

  return (
    <div className=''>
      <div className='place-items-center'>
        <Image loading='lazy' src='/logo.png' width={400} height={100} alt="This is the logo for Vantablacc" />
      </div>
      <div>
        <h2>Christmas '23</h2>
        <time className="countdown" date-time="2023-02-14 00:00:00" style={{ '--accent': 'red' }}></time>
      </div>
      <div>
        <div id="days">{timeLeft.days}<span>Days</span></div>
        <div id="hours">{timeLeft.hours}<span>Hours</span></div>
        <div id="minutes">{timeLeft.minutes}<span>Minutes</span></div>
        <div id="seconds">{timeLeft.seconds}<span>Seconds</span></div>
      </div>
    </div>
  );
}

export default LogoTimer;