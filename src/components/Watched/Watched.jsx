/* eslint-disable react/prop-types */
import WatchedList from "./WatchedList";
function Watched({ watched, onDeleteMovie }) {
  return (
    <ul className="divide-y divide-gray-700">
      {watched.map((movie) => (
        <WatchedList
          key={movie.imdbId}
          movie={movie}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
}

export default Watched;
