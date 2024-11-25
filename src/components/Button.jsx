/* eslint-disable react/prop-types */
function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none transition duration-300"
    >
      {children}
    </button>
  );
}

export default Button;
