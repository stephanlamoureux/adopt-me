// import React from 'react'; <-- don't need this anymore because of babel

// export default function Pet({ name, animal, breed }) {
// 	return React.createElement('div', {}, [
// 		React.createElement('h1', {}, name),
// 		React.createElement('h2', {}, animal),
// 		React.createElement('h2', {}, breed),
// 	]);
// }

// ** same as above but with JSX **

// export default function Pet(props) {
// 	return (
// 		<div>
// 			<h2>{props.name}</h2>
// 			<h3>{props.animal}</h3>
// 			<h3>{props.breed}</h3>
// 		</div>
// 	);
// }

// ** same as above but with destructuring **

// export default function Pet({ name, animal, breed }) {
// 	return (
// 		<div>
// 			<h2>{name}</h2>
// 			<h3>{animal}</h3>
// 			<h3>{breed}</h3>
// 		</div>
// 	);
// }

const Pet = (props) => {
	const { name, animal, breed, images, location, id } = props;

	let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
	if (images.length) {
		hero = images[0];
	}

	return (
		<a href={`/details/${id}`} className="pet">
			<div className="image-container">
				<img src={hero} alt={name} />
			</div>
			<div className="info">
				<h1>{name}</h1>
				<h2>{`${animal} — ${breed} — ${location}`}</h2>
			</div>
		</a>
	);
};

export default Pet;
