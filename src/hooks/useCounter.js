import { useState } from "react";
import { useTotalCountContext } from "./useTotalCountContext";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  const { setTotalCount, totalCount } = useTotalCountContext();

  const addCount = () => {
    setTotalCount(totalCount + 1);
    setCount(count + 1);
  };
  const reduceCount = () => {
    setTotalCount(totalCount - 1);
    setCount(count - 1);
  };

  return [count, addCount, reduceCount];
};

export default useCounter;
