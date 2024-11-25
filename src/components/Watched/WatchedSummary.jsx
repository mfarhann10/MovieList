/* eslint-disable react/prop-types */
function WatchedSummary({ watched }) {
  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="p-4 bg-gray-700 text-white">
      <h2 className="text-xl font-bold">Movies you watched</h2>
      <div className="mt-2 text-sm flex flex-wrap gap-4">
        <p>
          <span>#️⃣</span> {watched.length} movies
        </p>
        <p>
          <span>⭐️</span> {avgImdbRating.toFixed(1)}
        </p>
        <p>
          <span>🌟</span> {avgUserRating.toFixed(1)}
        </p>
        <p>
          <span>⏳</span> {avgRuntime.toFixed(0)} min
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
