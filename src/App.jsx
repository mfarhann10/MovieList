import { useState, useMemo } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/NavBar/Search";
import NumResults from "./components/NavBar/NumResults";
import Movie from "./components/Movie/Movie";
import Box from "./components/Box";
import Watched from "./components/Watched/Watched";
import WatchedSummary from "./components/Watched/WatchedSummary";
import Loader from "./API/Loader";
import ErrorMessage from "./API/Error";
import MovieDetails from "./components/Movie/MovieDetail";
import { useMovie } from "./Hooks/UseMovie";
import { useLocalStorageState } from "./Hooks/useLocalStorageState";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const KEY = useMemo(() => import.meta.env.VITE_APP_KEY, []);
  const { movies, isLoading, error, setError } = useMovie(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function HandleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function HandleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddMovie(movie) {
    setWatched((watched) => [...watched, movie]);

    //store data in local storage
    //localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  }

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
              setError={setError}
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
