import React, { useState } from 'react';
import "./index.css";
import WithFooter from '../withFooter';
import Topic from "../topic";

const Countdown = ({ setIsLoading }) => {
  const [loadingNumber, setLoadingNumber] = useState(3);

  const onCountDown = () => {
    setLoadingNumber(loadingNumber-1)
    if (loadingNumber === 1)
      setIsLoading(false);
  };

  const numbers = {
    3: "00A676",
    2: "7DCD85",
    1: "3A97C9"
  };
  

  return <div className="full-height"><WithFooter>
    <Topic />
    <p className="ready">Empezamos en...</p>
    <p
      key={loadingNumber}
      className="centered countdown-number animate__animated animate__fadeOut"
      onAnimationEnd={onCountDown}
      style={{ color: `#${numbers[loadingNumber]}` }}
    >
      {loadingNumber}
    </p>

  </WithFooter></div>
}

export default Countdown;