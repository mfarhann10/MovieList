import { useRef } from "react";
import { useKey } from "../../Hooks/useKey";

/* eslint-disable react/prop-types */
function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <input
      className="w-80 px-4 py-2 text-gray-200 placeholder-gray-400 bg-indigo-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition-all"
      id="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;
