// import React from 'react';

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

export default function Pet({ name, animal, breed }) {
	return (
		<div>
			<h2>{name}</h2>
			<h3>{animal}</h3>
			<h3>{breed}</h3>
		</div>
	);
}
