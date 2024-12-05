import { useEffect, useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/NavBar/Search";
import NumResults from "./components/NavBar/NumResults";
import tempMovieData from "./data/tempMovieData";
import tempWatchedData from "./data/tempWatchedData";
import Movie from "./components/Movie/Movie";
import Box from "./components/Box";
import Watched from "./components/Watched/Watched";
import WatchedSummary from "./components/Watched/WatchedSummary";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  const KEY = import.meta.env.VITE_APP_KEY;
  const query = "interstellar";
  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
    }
    fetchMovie();
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          <Movie movies={movies} />
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <Watched watched={watched} />
        </Box>
      </Main>
    </div>
  );
}

export default App;
