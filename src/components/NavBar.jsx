/* eslint-disable react/prop-types */
import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

function NavBar({ movies }) {
  return (
    <nav className="flex items-center justify-between bg-indigo-600 rounded-lg px-8 py-4 shadow-lg">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}

export default NavBar;
