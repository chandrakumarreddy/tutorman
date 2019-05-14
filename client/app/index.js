import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import ProfileSearchComp from "./components/ProfileSearch/ProfileSearch";
import UpdateProfileComp from "./components/UpdateProfile/UpdateProfile";

const BaseLayout = () => (
	<div>
		<Route path="/" exact component={App} />
		<Route path="/ProfileSearch" component={ProfileSearchComp} />
		<Route path="/UpdateProfile" component={UpdateProfileComp} />
	</div>
);

ReactDOM.render(
	<Router>
		<BaseLayout />
	</Router>,
	document.getElementById("root")
);
