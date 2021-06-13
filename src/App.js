// import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

// const App = () => {
// 	return React.createElement('div', {}, [
// 		React.createElement('h1', {}, 'Adopt Me!'),
// 		React.createElement(Pet, {
// 			name: 'Luna',
// 			animal: 'Dog',
// 			breed: 'Havanese',
// 		}),
// 		React.createElement(Pet, {
// 			name: 'Pepper',
// 			animal: 'Bird',
// 			breed: 'Cockatiel',
// 		}),
// 		React.createElement(Pet, {
// 			name: 'Doink',
// 			animal: 'Cat',
// 			breed: 'Mix',
// 		}),
// 	]);
// };

//  ** JSX translates the code below into the React.createElement calls above **

export default function App() {
	return (
		<div>
			<h1>Adopt Me!</h1>
			<Pet name="Luna" animal="dog" breed="Havanese" />
			<Pet name="Pepper" animal="bird" breed="Cockatiel" />
			<Pet name="Doink" animal="Cat" breed="Mix" />
		</div>
	);
}

// ReactDOM.render(React.createElement(App), document.getElementById('root')); <--- old way with createElement

render(<App />, document.getElementById('root'));
