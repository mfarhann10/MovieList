/* eslint-disable react/prop-types */
import WatchedList from "./WatchedList";
function Watched({ watched }) {
  return (
    <ul className="divide-y divide-gray-700">
      {watched.map((movie) => (
        <WatchedList key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default Watched;
