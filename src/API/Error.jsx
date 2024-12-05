/* eslint-disable react/prop-types */
function ErrorMessage({ message }) {
  return (
    <div className="flex items-center justify-center h-full pt-5">
      <p className="text-red-500 bg-red-100 border border-red-400 rounded-lg px-4 py-2">
        ⛔{message}
      </p>
    </div>
  );
}

export default ErrorMessage;
