import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ fetchData }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(searchTerm);
		fetchData(searchTerm);
		setSearchTerm('');
	};

	return (
		<div>
			<div className="relative">
				<form onSubmit={handleSubmit}>
					<input
						className="search w-full h-12 px-6 py-4"
						type="text"
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button type="submit">
						<img
							className="absolute top-4 right-6"
							src="../../../assets/images/icon-search.svg"
							alt=""
						/>
					</button>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
