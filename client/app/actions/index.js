import axios from "axios";
import { SEND_EMAIL } from "../types";

export default function sendEmail(recipientMail) {
	return async function(dispatch) {
		return await axios.post("http://localhost:3000/signin", {
			recipientMail
		});
	};
}
