// Reusable field component
export const Field = ({ label, error, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold" style={{ color: "#e6ac2c" }}>
        {label}
      </label>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
};

export const FieldInput = ({ error, ...props }) => {
  return (
    <input
      {...props}
      autoComplete="off"
      style={{
        backgroundColor: "#f0f2f8",
        border: error ? "2px solid #f87171" : "2px solid transparent",
        borderRadius: "5px",
      }}
      className="w-full px-3 py-3 text-[15px] text-gray-700 placeholder-gray-400 transition outline-none focus:ring-2 focus:ring-emerald-400"
    />
  );
};
