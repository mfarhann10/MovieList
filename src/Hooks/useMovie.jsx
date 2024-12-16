import { useState, useEffect, useMemo } from "react";

export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const KEY = useMemo(() => import.meta.env.VITE_APP_KEY, []);

  useEffect(
    function () {
      //callback?.();
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found!");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
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
      //HandleCloseMovie();
      fetchMovie();
      return function () {
        controller.abort();
      };
    },
    [query, KEY]
  );
  return { movies, isLoading, error, setError };
}
