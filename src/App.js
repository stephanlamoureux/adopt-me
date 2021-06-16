// import React from 'react'; / <---- don't need to import anymore, babel detects jsx and does it for you.
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { StrictMode } from 'react';

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
			<SearchParams />
		</div>
	);
}

// ReactDOM.render(React.createElement(App), document.getElementById('root')); <--- old way with createElement

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
