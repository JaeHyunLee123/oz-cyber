import Search from "./icons/Search";

export default function SearchInput() {
  return (
    <div className="flex-1 max-w-2xs flex justify-start items-center space-x-0.5 bg-[#e4e4e5] p-3 rounded-2xl">
      <label htmlFor="search-input">
        <Search />
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search"
        className="placeholder:text-[#989898] focus:outline-none p-1"
      />
    </div>
  );
}
