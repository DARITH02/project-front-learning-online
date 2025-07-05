export function Button({ children, className = "", variant = "default", size = "base", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded ${
        variant === "ghost" ? "bg-transparent hover:bg-gray-100" : "bg-blue-600 hover:bg-blue-700 text-white"
      } ${
        size === "icon" ? "w-10 h-10 p-2" : "px-4 py-2"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
