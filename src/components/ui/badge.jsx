export function Badge({ children, className = "" }) {
    return (
        <span
            className={`inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded ${className}`}
        >
            {children}
        </span>
    );
}
