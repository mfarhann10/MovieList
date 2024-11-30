import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import StarRating from "./components/Star/StarRating.jsx";
import "./index.css";
// import "../public/css/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating maxRating={10} />
    <StarRating maxRating={5} />
    <StarRating />
  </StrictMode>
);
