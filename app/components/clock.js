import React from 'react';
import { useTimer } from 'react-timer-hook';


const getNextMidnight = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); 
  return midnight;
};

function DailyCountdown() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    restart,
  } = useTimer({ 
    expiryTimestamp: getNextMidnight(),
    onExpire: () => {
      const nextMidnight = getNextMidnight();
      restart(nextMidnight);
    },
    autoStart: true
  });

  return (
    <div style={{textAlign: 'center', display:'flex'}} className='cl'>
      <p style={{fontSize:'14px'}}>Time for the next Question:</p>
      <div style={{fontSize: '25px', position:'relative', top:'7px', left:'10px'}}>
        <span>{hours.toString().padStart(2, '0')}</span>:
        <span>{minutes.toString().padStart(2, '0')}</span>:
        <span>{seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default function Clock() {
  return (
    <div>
      <DailyCountdown />
    </div>
  );
}