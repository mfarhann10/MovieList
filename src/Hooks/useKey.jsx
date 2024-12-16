import { useEffect } from "react";

export function useKey(key, action) {
  //escape in movie detail
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      //cleanup function
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
