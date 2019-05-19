import axios1 from "axios";
import axios from "../config/Api";
import { SEND_EMAIL, ADD_USER } from "../types";

export default function sendEmail(recipientMail) {
	return async function(dispatch) {
		return await axios.post("/signin", {
			recipientMail
		});
	};
}

export function getUsers() {
	return async function(dispatch) {
		const res = await axios.get("/users");
		dispatch({ type: ADD_USER, payload: res.data.users });
	};
}

export function register(user) {
	return async function(dispatch) {
		const res = await axios.post("/register", user);
		return Promise.resolve();
	};
}

export function update(id, user) {
	return async function(dispatch) {
		const res = await axios.patch(`/register/${id}`, user);
		return Promise.resolve();
	};
}

export function getUser(id) {
	return async function(dispatch) {
		const res = await axios.get(`/users/${id}`);
		return Promise.resolve(res.data);
	};
}
