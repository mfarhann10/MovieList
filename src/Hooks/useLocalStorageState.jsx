import { useState, useEffect } from "react";
export function useLocalStorageState(initialState, key) {
  const [value, setvalue] = useState(function () {
    const storeWatched = localStorage.getItem(key);
    return storeWatched ? JSON.parse(storeWatched) : initialState;
  });
  //store data with effect
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setvalue];
}
