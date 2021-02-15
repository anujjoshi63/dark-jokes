import React, { useState, useEffect } from "react";
import "./water.css";
import "./App.css";
function App() {
	const [setup, setSetup] = useState("Click button for a joke!");
	const [punch, setPunch] = useState("");
	const [open, setOpen] = useState(true);
	const fetchJoke = () => {
		setOpen(false);
		fetch("https://sv443.net/jokeapi/v2/joke/Dark?type=twopart")
			.then(response => response.json())
			.then(data => {
				setSetup(data.setup);
				setPunch(data.delivery);
				setOpen(true);
			});
	};
	useEffect(() => {
		document.title = "Dark Jokes!";
	}, []);
	return (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Dark Jokes!</title>
			<div className="main">
				<div className="joke">{setup}</div>
				<div className="joke">{punch}</div>
				<div className="joke">
					<button
						className="center"
						onClick={() => {
							fetchJoke();
						}}
						disabled={!open}
					>
						Bring me a joke
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
