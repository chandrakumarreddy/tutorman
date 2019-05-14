import React, { useState } from "react";
import "./index.css";

export default function Register() {
	return (
		<div className="card ">
			<div className="content card-custom-top">
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">Name</label>
					</div>
					<div className="field-body">
						<div className="field">
							<p className="control">
								<input
									className="input"
									type="text"
									placeholder="Name"
								/>
							</p>
						</div>
					</div>
				</div>
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">Email</label>
					</div>
					<div className="field-body">
						<div className="field">
							<p className="control">
								<input
									className="input"
									type="email"
									placeholder="Email"
								/>
							</p>
						</div>
					</div>
				</div>
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">Phone</label>
					</div>
					<div className="field-body">
						<div className="field">
							<p className="control">
								<input
									className="input"
									type="text"
									placeholder="Phone"
								/>
							</p>
						</div>
					</div>
				</div>
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">Department</label>
					</div>
					<div className="field-body">
						<div className="field">
							<p className="control">
								<input
									className="input"
									type="text"
									placeholder="Department"
								/>
							</p>
						</div>
					</div>
				</div>
				<div className="field is-horizontal">
					<div className="field-label is-normal">
						<label className="label">Designation</label>
					</div>
					<div className="field-body">
						<div className="field">
							<p className="control">
								<input
									className="input"
									type="text"
									placeholder="Designation"
								/>
							</p>
						</div>
					</div>
				</div>
				<div className="is-horizontal">
					<a className="button is-link submit-email">Register</a>
				</div>
			</div>
		</div>
	);
}
