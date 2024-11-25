/* eslint-disable react/prop-types */
function NumResults({ movies }) {
  return (
    <p className="text-lg font-medium text-gray-200">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResults;
