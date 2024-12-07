import { useEffect, useState } from "react";
import StarRating from "../Star/StarRating";
import Loader from "../../API/Loader";
/* eslint-disable react/prop-types */
function MovieDetails({ selectedId, onCloseMovie, KEY }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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

  console.log(title, year);
  useEffect(
    function () {
      async function GetMovieDetail() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        console.log(data);
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
            <StarRating maxRating={10} className="mb-3" size={24} />
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
