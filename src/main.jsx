import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TotalCountProvider } from "./provider/TotalCountProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TotalCountProvider>
    <App />
  </TotalCountProvider>
);
