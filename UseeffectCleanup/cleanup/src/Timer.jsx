import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    console.log("hello");
    
    const id = setTimeout(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    const cleanupFunction = () => {
      clearInterval(id);
    }

    return cleanupFunction;
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Timer;
