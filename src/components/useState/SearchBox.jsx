/* eslint-disable react/prop-types */
export const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="mt-3">
      <label htmlFor="search" className="input-label">
        Search tasks
      </label>
      <input
        id="search"
        type="text"
        className="input-default"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
