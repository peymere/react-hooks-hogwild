import React, {useState} from "react";
import Nav from "./Nav";
import Header from "./Header";
import CardContainer from "./CardContainer";

import hogs from "../porkers_data";


function App() {



	// const greasedHogs = hogs.greased

	return (
		<div className="App">
			<Nav />
			<Header hogData={hogs}/>
				{/* filter */}
			<CardContainer hogData={hogs} />
		</div>
	);
}

export default App;


//App
	//Nav
	//Header
		//Filter
		//Sort
	//Card Container
		//Pig Card
