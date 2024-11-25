/* eslint-disable react/prop-types */
import { useState } from "react";
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
      <button
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

export default Box;
