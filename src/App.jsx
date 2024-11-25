import { useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import tempMovieData from "./data/tempMovieData";
import MovieBox from "./components/Movie/MovieBox";
import WatchedBox from "./components/Watched/WatchedBox";
import Movie from "./components/Movie/Movie";

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        {/* Movie List */}
        <MovieBox>
          <Movie movies={movies} />
        </MovieBox>
        {/* Watched List */}
        <WatchedBox />
      </Main>
    </div>
  );
}

export default App;
