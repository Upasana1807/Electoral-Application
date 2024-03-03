import React, { useState, useEffect } from 'react';
import './Timer.css';
import PIC from '../../image/timerpic.jpg'

const CountdownTimer = () => {
  const [dueDay, setDueDay] = useState(0);
  const [dueHour, setDueHour] = useState(0);
  const [dueMinute, setDueMinute] = useState(0);
  const [dueSecond, setDueSecond] = useState(0);

  useEffect(() => {
    const countDownTime = () => {
      const currentTime = new Date().getTime();
      const dueTime = new Date("May 2, 2024 00:00:00").getTime();
      const diff = dueTime - currentTime;

      const sec = 1000;
      const minute = sec * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const newDueDay = Math.floor(diff / day);
      const newDueHour = Math.floor((diff % day) / hour);
      const newDueMinute = Math.floor((diff % hour) / minute);
      const newDueSecond = Math.floor((diff % minute) / sec);

      setDueDay(newDueDay);
      setDueHour(newDueHour);
      setDueMinute(newDueMinute);
      setDueSecond(newDueSecond);
    };

    const intervalId = setInterval(countDownTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
  < div className="timer-outer-div">
    <div className="timer-heading-div">
      <span className="timer-heading-name">Welcome to Electoral App</span>
    </div>
    <div className="timer-inner-div">
        <div className="timer">
          <span className="timer-inner-heading">Upcoming Election</span>
          <div className='collection-div'>
            <div className='block-div'>
              <div id="day">{dueDay}</div>
              <div class="text"><center><h5>Days</h5></center></div>  
            </div>
            <div className='block-div'>
             <div id="hour">{dueHour}</div>
             <div class="text"><center><h5>hours</h5></center></div>  
            </div>
            <div className='block-div'>
             <div id="minute">{dueMinute}</div>
             <div class="text"><center><h5>mins</h5></center></div>  
            </div>
            <div className='block-div'>
             <div id="second">{dueSecond}</div>
             <div class="text"><center><h5>secs</h5></center></div>  
            </div>
          </div>
        </div>
      <div className='timer-inner1-div'>
        <img src={PIC} alt="icon" height={288} width={506} /> 
      </div>  
    </div>
  </div>

  );
};

export default CountdownTimer;
