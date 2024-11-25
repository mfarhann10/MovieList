/* eslint-disable react/prop-types */
import MovieList from "./MovieList";
function Movie({ movies }) {
  return (
    <ul className="divide-y divide-gray-700">
      {movies?.map((movie) => (
        <MovieList movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default Movie;
