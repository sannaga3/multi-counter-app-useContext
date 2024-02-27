import PropTypes from "prop-types";
import useCounter from "../hooks/useCounter";

const Counter = ({ initialCount }) => {
  const [count, addCount, reduceCount] = useCounter(initialCount || 0);

  return (
    <div className="flex space-x-3">
      <div>count : {count}</div>
      <button
        type="button"
        onClick={() => addCount(count)}
        className="btn btn-xs btn-success h-6"
      >
        add
      </button>
      <button
        type="button"
        onClick={() => reduceCount(count)}
        className="btn btn-xs btn-warning h-6"
      >
        reduce
      </button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  initialCount: PropTypes.number,
};
