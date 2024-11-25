import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-indigo-600 rounded-lg px-8 py-4 shadow-lg">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}

export default NavBar;
