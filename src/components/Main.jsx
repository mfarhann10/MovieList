import MovieBox from "./Movie/MovieBox";
import WatchedBox from "./Watched/WatchedBox";
function Main() {
  return (
    <main className="flex gap-6 justify-center mt-6">
      {/* Movie List */}
      <MovieBox />
      {/* Watched List */}
      <WatchedBox />
    </main>
  );
}

export default Main;
