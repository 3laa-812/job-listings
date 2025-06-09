import type { FilterBarProps } from "../types";

const FilterBar = ({ filters, onClear, onRemove }: FilterBarProps) => {
  if (filters.length === 0) return null;

  return (
    <div className="bg-white shadow p-4 mb-6 flex items-center justify-between rounded">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter, idx) => (
          <div
            key={idx}
            className="flex items-center bg-neutral-light-grayish-cyan rounded overflow-hidden"
          >
            <span className="px-2 py-1 text-sm font-bold text-primary-dark-cyan">
              {filter}
            </span>
            <button
              onClick={() => onRemove(filter)}
              className=" bg-primary-dark-cyan text-white  hover:bg-neutral-very-dark-grayish-cyan"
            >
              <img
                className="w-full p-2"
                src="../../public/images/icon-remove.svg"
                alt="remove icon"
              />
            </button>
          </div>
        ))}
      </div>

      <button onClick={onClear} className="text-primary-dark-cyan hover:underline">
        Clear All
      </button>
    </div>
  );
};

export default FilterBar;
