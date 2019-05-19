import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Profile from "./ProfileSearch/";
import UpdateProfile from "./UpdateProfile/";
import Register from "./Register";
import Pdf from "./pdfFormat";
import Admin from "./Admin";

const App = props => {
	return (
		<div className="container container-custom">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/update" exact component={UpdateProfile} />
					<Route path="/update/:id" component={UpdateProfile} />
					<Route path="/register" component={Register} />
					<Route path="/pdf" component={Pdf} />
					<Route path="/admin" component={Admin} />
					<Route path="/" component={Profile} exact />
					<Route component={() => <div>Not found</div>} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
