/* eslint-disable react/prop-types */
import { useState } from "react";
import Movie from "./Movie";

function MovieBox({ movies }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="w-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
      <button
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <Movie movies={movies} />}
    </div>
  );
}

export default MovieBox;
