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
        </div>
      </div>
      <button
        className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full shadow-md transition-all"
        onClick={() => onDeleteMovie(movie.imdbId)}
        aria-label={`Delete ${movie.title}`}
      >
        ❌
      </button>
    </li>
  );
}

export default WatchedList;
