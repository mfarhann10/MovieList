import { useState } from "react";
import tempMovieData from "../data/tempMovieData";
import tempWatchedData from "../data/tempWatchedData";
function Main() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <main className="flex gap-6 justify-center mt-6">
      {/* Movie List */}
      <div className="w-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
        <button
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button>
        {isOpen1 && (
          <ul className="divide-y divide-gray-700">
            {movies.map((movie) => (
              <li
                key={movie.imdbID}
                className="p-4 flex items-start gap-4 hover:bg-gray-700 transition-all"
              >
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} poster`}
                  className="w-16 h-24 object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{movie.Title}</h3>
                  <p className="text-sm text-gray-400">{movie.Year}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Watched List */}
      <div className="w-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
        <button
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <div className="p-4 bg-gray-700 text-white">
              <h2 className="text-xl font-bold">Movies you watched</h2>
              <div className="mt-2 text-sm flex flex-wrap gap-4">
                <p>
                  <span>#️⃣</span> {watched.length} movies
                </p>
                <p>
                  <span>⭐️</span> {avgImdbRating.toFixed(1)}
                </p>
                <p>
                  <span>🌟</span> {avgUserRating.toFixed(1)}
                </p>
                <p>
                  <span>⏳</span> {avgRuntime.toFixed(0)} min
                </p>
              </div>
            </div>
            <ul className="divide-y divide-gray-700">
              {watched.map((movie) => (
                <li
                  key={movie.imdbID}
                  className="p-4 flex items-start gap-4 hover:bg-gray-700 transition-all"
                >
                  <img
                    src={movie.Poster}
                    alt={`${movie.Title} poster`}
                    className="w-16 h-24 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{movie.Title}</h3>
                    <div className="mt-1 text-sm flex gap-4 text-gray-400">
                      <p>
                        <span>⭐️</span> {movie.imdbRating}
                      </p>
                      <p>
                        <span>🌟</span> {movie.userRating}
                      </p>
                      <p>
                        <span>⏳</span> {movie.runtime} min
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
