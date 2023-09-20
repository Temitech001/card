import { useState } from 'react';

const Welcome = () => {
  const [count, setCount] = useState(0);

  function decrease() {
    // setCount(count <= 0 ? 0 : count - 1);
    setCount((n) => (n <= 0 ? 0 : count - 1));
  }
  function increase() {
    setCount(count + 1);
  }

  return (
    <div className=" flex flex-col text-1xl items-center justify-center mt-6 mb-5 ">
      <p className="text-xl font-semibold mt-9">Counter App</p>
      <div className="flex mt-9 gap-6">
        <button
          className="w-9 bg-blue-600 rounded-md"
          onClick={decrease}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="w-9 bg-blue-600 rounded-md"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Welcome;
