import { useState } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
	// const locationTuple = useState("Boston, MA");
	// const location = locationTuple[0];
	// const setLocation = locationTuple[1];

	// ****** do not put hooks inside if statements or loops! ******
	const [location, setLocation] = useState(''); // <--- same as above, but w/ destructuring
	const [animal, setAnimal] = useState('d');
	const [breed, setBreed] = useState('');
	const breeds = [];

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
				<label htmlFor="animal">
					Animal
					<select
						id="animal"
						value={animal}
						onChange={(event) => setAnimal(event.target.value)}
						onBlur={(event) => setAnimal(event.target.value)}
					>
						<option value=""></option>
						{ANIMALS.map((animal) => (
							<option value={animal} key={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>
				<label htmlFor="breed">
					Breed
					<select
						disabled={!breeds.length}
						id="breed"
						value={breed}
						onChange={(event) => setBreed(event.target.value)}
						onBlur={(event) => setBreed(event.target.value)}
					>
						<option value=""></option>
						{breeds.map((breed) => (
							<option value={breed} key={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

/*
with ANIMALS.map, If you use parenthesis instead of {} it will return everything side of them.

We use the setLocation function in the onChange attribute of the input.
Every time the input is typed into, it's going to call that function which calls setLocation with what has been typed into the input.
When setLocation is called, React knows that its state has been modified and kicks off a re-render.
*/

export default SearchParams;
