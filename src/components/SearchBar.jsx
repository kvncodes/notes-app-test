import { FaSearch } from "react-icons/fa";

const SearchBar = ({ handleSearchChange }) => {
	return (
		<div className="search-bar">
			<FaSearch size={"1.2rem"} className="search-icon" />
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Type to search..."
				onChange={(e) => handleSearchChange(e.target.value)}
			/>
		</div>
	);
};
export default SearchBar;
