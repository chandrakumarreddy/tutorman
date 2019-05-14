import React from "react";
import Register from "../Register";
import "./index.css";

export default function Home() {
	return (
		<div className="Home">
			<div className="Home-wrapper">
				<div>
					<div className="department">
						<div>Department</div>
						<div>
							<div className="select">
								<select>
									<option>Select company</option>
									<option>Alkamia</option>
									<option>IBM</option>
								</select>
							</div>
						</div>
					</div>
					<div className="emailer">
						<div>Email </div>
						<div className="field email">
							<div className="control">
								<input
									className="input is-info"
									type="email"
									placeholder="Email here"
								/>
							</div>
							<div className="control">
								<a className="button is-link submit-email">
									Submit
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="register">
					<Register />
				</div>
			</div>
		</div>
	);
}
