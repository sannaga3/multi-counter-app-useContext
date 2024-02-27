import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const TotalCountContext = createContext();

export const TotalCountProvider = ({ children }) => {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <TotalCountContext.Provider value={{ totalCount, setTotalCount }}>
      {children}
    </TotalCountContext.Provider>
  );
};

TotalCountProvider.propTypes = {
  children: PropTypes.node,
};
