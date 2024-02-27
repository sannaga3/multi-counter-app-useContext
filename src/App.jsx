import { useState } from "react";
import Counter from "./components/Counter";
import { useTotalCountContext } from "./hooks/useTotalCountContext";

const App = () => {
  const [counterList, setCounterList] = useState([]);
  const { setTotalCount, totalCount } = useTotalCountContext();

  const createCounter = (initialCount) => {
    const key = counterList.length;
    setCounterList([
      ...counterList,
      <Counter initialCount={initialCount} key={key} />,
    ]);
    setTotalCount(totalCount + initialCount);
  };

  return (
    <div className="mt-10">
      <div className="text-xl text-center font-semibold">Counter App</div>
      <div className="flex justify-center mt-10">
        <div className="space-y-5">
          <div className="flex items-center space-x-5">
            <label htmlFor="initialCount">initialCount: </label>
            <input
              type="number"
              id="initialCount"
              name="initialCount"
              defaultValue={0}
              className="w-20 border border-gray-500 rounded-md px-2"
            />
            <button
              type="button"
              className="btn btn-xs btn-success h-6"
              onClick={() => {
                const initialCount = document.getElementById("initialCount").value || 0;
                createCounter(parseInt(initialCount));
              }}
            >
              create counter
            </button>
          </div>

          {counterList.map((counter, index) => (
            <div key={index}>{counter}</div>
          ))}

          <div>totalCount : {totalCount}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
