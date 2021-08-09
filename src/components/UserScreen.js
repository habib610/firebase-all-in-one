import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { fireStoreDb } from "../Firebase/firebaseConfig";
import useFireStore from "../hooks/useFireStore";

const UserScreen = () => {
	const [users, setUsers] = useState([]);
	const [usersRealtime, setUsersRealtime] = useState([]);

	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [born, setBorn] = useState("");

	const submitHandler = (id) => {};

	const collection = "users";

	// not real time update
	useEffect(() => {
		fireStoreDb
			.collection(collection)
			.get()
			.then((querySnapShoot) => {
				let docs = [];
				querySnapShoot.forEach((item) => {
					docs.push(item.data());
				});
				setUsers(docs);
			});
	}, []);
	console.log(users, "not realtime");

	// listen for real time updates
	useEffect(() => {
		fireStoreDb.collection(collection).onSnapshot((querySnapShoot) => {
			let docs = [];
			querySnapShoot.forEach((item) => {
				console.log(item.data());
				docs.push(item.data());
			});
			setUsersRealtime(docs);
		});
	}, [collection]);
	console.log(usersRealtime, "realtime");

	// listen realtime data update using custom hooks
	const { docsHooks } = useFireStore(collection);
	console.log(docsHooks, "realtime using hooks");

	return (
		<Container>
			<h1 className="text-center">All Users</h1>
			<Row>
				{users.map((item, index) => (
					<Col key={index} md={6}>
						<div className="bg-light p-3 m-3">
							<p>
								First Name:
								<span className="bg-info text-white px-3 ml-4">
									{item.first}
								</span>
							</p>
							<p>
								Last Name:
								<span className="bg-info text-white px-3 ml-4">
									{item.last}
								</span>
							</p>
							<p>
								Born:
								<span className="bg-info text-white px-3 ml-4">
									{item.born}
								</span>
							</p>
							<p>
								User Id:
								<span className="bg-info text-white px-3 ml-4">
									{item.id}
								</span>
							</p>
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
