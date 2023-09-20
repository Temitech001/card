// import { Button } from '@chakra-ui/react';
import react, { useEffect, useState } from 'react';
const Timer = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  const handleStartStop = () => {
    setIsCounting((prev) => !prev);
  };
  const handleReset = () => {
    setCount(0);
    isCounting(false);
  };
  return (
    <div className="flex  flex-col items-center  gap-4 ">
      <p>{count}</p>
      <div className="flex gap-3">
        <button
          className="bg-blue-800 rounded-full px-5 py-1"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className={`${
            isCounting ? 'bg-red-600' : 'bg-green-500'
          }  text-slate-50 font-semibold  rounded-full py-1 px-6`}
          onClick={handleStartStop}
        >
          {isCounting ? 'stop' : 'start'}
        </button>
      </div>
    </div>
  );
};

export default Timer;
