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
