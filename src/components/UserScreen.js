import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { fireStoreDb } from "../Firebase/firebaseConfig";

const UserScreen = () => {
	const [users, setUsers] = useState([]);

	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [born, setBorn] = useState("");

	const submitHandler = (id) => {};
	return (
		<Container>
			<h1 className="text-center">All Users</h1>
			<Row>
				{users.map((item, index) => (
					<Col key={index} md={6}>
						<div className="bg-light p-3 m-3">
							<h4>
								First Name:
								<span className="bg-info text-white px-3 ml-4">
									{item.first}
								</span>
							</h4>
							<h4>
								Last Name:
								<span className="bg-info text-white px-3 ml-4">
									{item.last}
								</span>
							</h4>
							<h4>
								Born:
								<span className="bg-info text-white px-3 ml-4">
									{item.born}
								</span>
							</h4>
							<h4>
								User Id:
								<span className="bg-info text-white px-3 ml-4">
									{item.id}
								</span>
							</h4>
							<Row>
								<Col md={6} className="mx-auto">
									<Form>
										<Form.Group>
											<Form.Label>First Name</Form.Label>
											<Form.Control
												onChange={(e) =>
													setFName(e.target.value)
												}
												placeholder="First name"
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Last Name</Form.Label>
											<Form.Control
												onChange={(e) =>
													setLName(e.target.value)
												}
												placeholder="Last name"
											/>
										</Form.Group>
										<Form.Group>
											<Form.Label>Born</Form.Label>
											<Form.Control
												onChange={(e) =>
													setBorn(e.target.value)
												}
												placeholder="Born"
											/>
										</Form.Group>
										<Button
											onClick={() =>
												submitHandler(item.id)
											}
											className="m-5"
										>
											Update User
										</Button>
									</Form>
								</Col>
							</Row>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default UserScreen;
