import { useState } from "react";
function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="w-80 px-4 py-2 text-gray-200 placeholder-gray-400 bg-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition-all"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
