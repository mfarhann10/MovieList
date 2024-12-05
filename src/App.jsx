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
import Loader from "./API/Loader";
import Error from "./API/Error";
import ErrorMessage from "./API/Error";

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = import.meta.env.VITE_APP_KEY;
  const query = "ssdfdfef";

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!res.ok) throw new Error("Error fetching the data");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found !");

        setMovies(data.Search);
        console.log(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
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
          {/* {isLoading ? <Loader /> : <Movie movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <Movie movies={movies} />}
          {error && <ErrorMessage message={error} />}
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
