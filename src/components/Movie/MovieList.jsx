/* eslint-disable react/prop-types */

function MovieList({ movie, onSelectMovie }) {
  return (
    <li
      className="p-4 flex items-start gap-4 hover:bg-gray-700 transition-all"
      onClick={() => onSelectMovie(movie.imdbID)}
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
  );
}

export default MovieList;
