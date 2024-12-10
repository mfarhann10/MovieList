import { useEffect, useState } from "react";
import StarRating from "../Star/StarRating";
import Loader from "../../API/Loader";
/* eslint-disable react/prop-types */
function MovieDetails({ selectedId, onCloseMovie, KEY, onAddMovie, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbId).includes(selectedId);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function HandleAd() {
    const newWatchedMovie = {
      imdbId: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddMovie(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      async function GetMovieDetail() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();

        setMovie(data);
        setIsLoading(false);
      }
      GetMovieDetail();
    },
    [selectedId, KEY]
  );

  return (
    <div className="">
      {isLoading ? (
        <div className="flex items-center justify-center h-[400px]">
          <Loader />
        </div>
      ) : (
        <>
          <header className="relative p-6 border-b border-gray-700">
            {/* Back Button */}
            <button
              onClick={onCloseMovie}
              className="absolute top-4 left-4 px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md"
            >
              ← Back
            </button>
            <div className="flex items-start gap-6">
              {/* Enlarged Poster */}
              <img
                src={poster}
                alt={`Poster of ${title}`}
                className="w-48 h-64 object-cover rounded-lg shadow-md"
              />
              {/* Movie Overview */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{title}</h2>
                <p className="text-sm text-gray-400 mb-2">
                  {released} • {runtime}
                </p>
                <p className="text-sm text-gray-400">{genre}</p>
                <p className="text-yellow-400 font-semibold mt-4">
                  ⭐ {imdbRating} IMDb Rating
                </p>
              </div>
            </div>
          </header>

          {/* Details Section */}
          <section className="p-5">
            {!isWatched ? (
              <>
                {" "}
                <StarRating
                  maxRating={10}
                  className="mb-3"
                  size={24}
                  onSetRating={setUserRating}
                />
                {userRating > 0 && (
                  <button
                    className="px-4 py-2 mb-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-md focus:outline-none "
                    onClick={HandleAd}
                  >
                    + Add to List
                  </button>
                )}
              </>
            ) : (
              <p className="text-xl text-gray-300 mb-4">
                {" "}
                You are rated this movie
              </p>
            )}
            <p className="italic text-gray-300 mb-6">{plot}</p>
            <p className="text-sm text-gray-400 mb-4">
              <strong>Starring:</strong> {actors}
            </p>
            <p className="text-sm text-gray-400">
              <strong>Director:</strong> {director}
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
