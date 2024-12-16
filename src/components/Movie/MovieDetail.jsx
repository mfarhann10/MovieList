import { useEffect, useRef, useState } from "react";
import StarRating from "../Star/StarRating";
import Loader from "../../API/Loader";
/* eslint-disable react/prop-types */
function MovieDetails({
  selectedId,
  onCloseMovie,
  KEY,
  onAddMovie,
  watched,
  setError,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating]
  );

  const isWatched = watched.map((movie) => movie.imdbId).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbId === selectedId
  )?.userRating;
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

  // const [avgRating, setAvgRating] = useState(0);

  function HandleAd() {
    const newWatchedMovie = {
      imdbId: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecision: countRef.current,
    };
    onAddMovie(newWatchedMovie);
    onCloseMovie();
    /* setAvgRating(Number(imdbRating));
    setAvgRating((avgRating) => (avgRating + userRating) / 2); */
  }

  //escape in movie detail
  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }

      document.addEventListener("keydown", callback);

      //cleanup function
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(
    function () {
      async function GetMovieDetail() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
          );
          if (!res) throw new Error("Movie not Found!");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found!");

          setMovie(data);
          setIsLoading(false);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        }
      }
      GetMovieDetail();
    },
    [selectedId, KEY, setError]
  );

  //For Title Page
  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      //cleanup function
      return function () {
        document.title = "usePopcorn";
        /* console.log(`clean up effect for movie ${title}`); */
      };
    },
    [title]
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
          {/* <p>{avgRating}</p> */}
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
                You are rated this movie {watchedUserRating} <span>⭐️</span>
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
