import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [diff, setDiff] = useState(0);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const increment = () => {
    let cNum = Number(count);
    let dNum = Number(diff);
    setCount(cNum + dNum);
  };

  const decrement = () => {
    let cNum = Number(count);
    let dNum = Number(diff);
    setCount(cNum - dNum);
  };

  useEffect(() => {
    if (count <= 0) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [count]);
  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
      <div>
        <h1 className="text-white text-8xl font-bold mb-10">Counter App</h1>
        <div className="flex gap-4 justify-center">
          <label
            htmlFor="diffNumber"
            className=" text-2xl font-medium text-white"
          >
            Number Difference
          </label>
          <input
            id="diffNumber"
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg block w-full p-2.5 placeholder-gray-400 "
            placeholder="Number Difference"
            onChange={(e) => setDiff(e.target.value)}
          />
        </div>

        <h2 className="text-white font-semibold text-9xl text-center my-10">
          {count}
        </h2>
        <div className="flex justify-between">
          <button
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none p-5 text-2xl text-white rounded-full font-semibold drop-shadow-xl"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none p-5 text-2xl text-white rounded-full font-semibold drop-shadow-xl"
            onClick={decrement}
            disabled={disabledBtn}
          >
            Decrement
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none p-5 text-2xl text-white rounded-full font-semibold drop-shadow-xl"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
