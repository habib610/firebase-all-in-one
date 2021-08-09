import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { fireStoreDb } from "../Firebase/firebaseConfig";

const AddScreen = () => {
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [born, setBorn] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		fireStoreDb
			.collection("users")
			.add({
				first: fName,
				last: lName,
				born: born,
			})
			.then((docRef) => {
				console.log("Document written with ID: ", docRef.id);
				setFName("");
				setLName("");
				setBorn("");
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	};
	return (
		<Container>
			<h1 className="text-center">Add users </h1>
			<Row>
				<Col md={6} className="mx-auto">
					<Form onSubmit={submitHandler}>
						<Form.Group>
							<Form.Label>First Name</Form.Label>
							<Form.Control
								value={fName}
								onChange={(e) => setFName(e.target.value)}
								placeholder="First name"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								value={lName}
								onChange={(e) => setLName(e.target.value)}
								placeholder="Last name"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Label>Born</Form.Label>
							<Form.Control
								value={born}
								onChange={(e) => setBorn(e.target.value)}
								placeholder="Born"
							/>
						</Form.Group>
						<Button type="submit" className="m-5">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default AddScreen;
