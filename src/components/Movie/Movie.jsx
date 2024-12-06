/* eslint-disable react/prop-types */
import MovieList from "./MovieList";
function Movie({ movies, onSelectMovie }) {
  return (
    <ul className="divide-y divide-gray-700 cursor-pointer">
      {movies?.map((movie) => (
        <MovieList
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

export default Movie;
