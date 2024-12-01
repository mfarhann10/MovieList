import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import StarRating from "./components/Star/StarRating.jsx";
import "./index.css";
// import "../public/css/styles.css";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was {movieRating} Rating</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Good", "Wow", "Amazing"]}
      className="Test"
    />
    <StarRating color="red" size={24} defaultRating={3} />
    <Test />
  </StrictMode>
);
