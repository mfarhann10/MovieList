import tempWatchedData from "../../data/tempWatchedData";
import { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import Watched from "./Watched";
function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="w-96 bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
      <button
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <Watched watched={watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBox;
