/* eslint-disable react/prop-types */
function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <div className="details">
      <button
        onClick={onCloseMovie}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow-md "
      >
        ←
      </button>
      {selectedId}
    </div>
  );
}

export default MovieDetails;
