/* eslint-disable react/prop-types */
function WatchedList({ movie, onDeleteMovie }) {
  return (
    <li className="p-4 flex items-start gap-4 hover:bg-gray-700 transition-all">
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className="w-16 h-24 object-cover rounded-md shadow-sm"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-100">{movie.title}</h3>
        <div className="mt-1 text-sm text-gray-400 flex flex-wrap gap-4">
          <p>
            <span className="text-yellow-400">⭐️</span> {movie.imdbRating}
          </p>
          <p>
            <span className="text-yellow-500">🌟</span> {movie.userRating}
          </p>
          <p>
            <span className="text-blue-400">⏳</span> {movie.runtime} min
          </p>
          <button
            className="absolute right-6 h-5 w-5 rounded-full border-none bg-red-500 text-gray-800 text-sm font-bold cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none"
            onClick={() => onDeleteMovie(movie.imdbId)}
            aria-label={`Delete ${movie.title}`}
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
}

export default WatchedList;
