import { useState } from 'react';

const SearchParams = () => {
	// const locationTuple = useState("Boston, MA");
	// const location = locationTuple[0];
	// const setLocation = locationTuple[1];
	const [location, setLocation] = useState('Boston, MA'); // <--- same as above, but w/ destructuring

	return (
		<div className="search-params">
			<form>
				<label htmlFor="location">
					Location
					<input
						id="location"
						onChange={(event) => setLocation(event.target.value)}
						value={location}
						placeholder="Location"
					/>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default SearchParams;
