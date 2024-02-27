import { useContext } from "react";
import { TotalCountContext } from "../provider/TotalCountProvider";

export const useTotalCountContext = () => {
  const context = useContext(TotalCountContext);
  return context;
};
