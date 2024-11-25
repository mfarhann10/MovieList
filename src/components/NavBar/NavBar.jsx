/* eslint-disable react/prop-types */
import Logo from "./Logo";

function NavBar({ children }) {
  return (
    <nav className="flex items-center justify-between bg-indigo-600 rounded-lg px-8 py-4 shadow-lg">
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
