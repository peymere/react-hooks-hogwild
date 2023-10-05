import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import CardContainer from "./CardContainer";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Header />
			<CardContainer hogData={hogs} />
		</div>
	);
}

export default App;
