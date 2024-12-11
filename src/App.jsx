import { useEffect, useMemo, useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/NavBar/Search";
import NumResults from "./components/NavBar/NumResults";
import Movie from "./components/Movie/Movie";
import Box from "./components/Box";
import Watched from "./components/Watched/Watched";
import WatchedSummary from "./components/Watched/WatchedSummary";
import Loader from "./API/Loader";
import Error from "./API/Error";
import ErrorMessage from "./API/Error";
import MovieDetails from "./components/Movie/MovieDetail";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const KEY = useMemo(() => import.meta.env.VITE_APP_KEY, []);
  const [selectedId, setSelectedId] = useState(null);

  function HandleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function HandleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  }
  useEffect(
    function () {
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
          setMovies([]);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setError("");
        setMovies([]);
        return;
      }

      fetchMovie();
    },
    [query, KEY]
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <Movie movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <Movie movies={movies} onSelectMovie={HandleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={HandleCloseMovie}
              KEY={KEY}
              onAddMovie={handleAddMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <Watched watched={watched} onDeleteMovie={handleDeleteMovie} />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
