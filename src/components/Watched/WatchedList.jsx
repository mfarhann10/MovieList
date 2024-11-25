/* eslint-disable react/prop-types */
function WatchedList({ movie }) {
  return (
    <li className="p-4 flex items-start gap-4 hover:bg-gray-700 transition-all">
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
  );
}

export default WatchedList;
