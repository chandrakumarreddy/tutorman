import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./ProfileList";

const App = props => {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" component={Home} exact />
				<Route path="/profile" component={() => "Hello"} />
			</div>
		</BrowserRouter>
	);
};

export default App;
