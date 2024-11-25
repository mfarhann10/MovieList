/* eslint-disable react/prop-types */
import MovieBox from "./Movie/MovieBox";
import WatchedBox from "./Watched/WatchedBox";
function Main({ movies }) {
  return (
    <main className="flex gap-6 justify-center mt-6">
      {/* Movie List */}
      <MovieBox movies={movies} />
      {/* Watched List */}
      <WatchedBox />
    </main>
  );
}

export default Main;
