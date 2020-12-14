import React, { useState } from "react";
import "./App.css";
function App() {
	const [setup, setSetup] = useState("Click button for a joke!");
	const [punch, setPunch] = useState("");
	const fetchJoke = () => {
		fetch("https://sv443.net/jokeapi/v2/joke/Dark?type=twopart")
			.then((response) => response.json())
			.then((data) => {
				setSetup(data.setup);
				setPunch(data.delivery);
			});
	};
	return (
		<div className="main" style={{ flex: 1 }}>
			<link rel="stylesheet" href="https://unpkg.com/wingcss" />
			<h3>{setup}</h3>
			<h3>{punch}</h3>
			<button
				className="
			center"
				onClick={() => {
					fetchJoke();
				}}
			>
				Bring me a joke
			</button>
		</div>
	);
}

export default App;
