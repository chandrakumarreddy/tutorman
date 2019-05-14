import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Profile from "./ProfileSearch/";
import UpdateProfile from "./UpdateProfile/";

const App = props => {
	return (
		<div className="container">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/profile" component={Profile} />
					<Route path="/update/:id" component={UpdateProfile} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
