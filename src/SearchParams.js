import { useState } from 'react';

const SearchParams = () => {
	// const locationTuple = useState("Boston, MA");
	// const location = locationTuple[0];
	// const setLocation = locationTuple[1];

	// ****** do not put hooks inside if statements or loops! ******
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

/*
We use the setLocation function in the onChange attribute of the input.
Every time the input is typed into, it's going to call that function which calls setLocation with what has been typed into the input.
When setLocation is called, React knows that its state has been modified and kicks off a re-render.
*/

export default SearchParams;
