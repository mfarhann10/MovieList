import { useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import tempMovieData from "./data/tempMovieData";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <NavBar movies={movies} />
      <Main movies={movies} />
    </div>
  );
}

export default App;
