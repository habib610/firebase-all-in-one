import React from "react";
import { fireStoreDb } from "../Firebase/firebaseConfig";

const CitesScreen = () => {
	const addWithId = () => {
		// Set a new
		// Set method needs to specify the doc id which means doc id wont auto generated
		fireStoreDb
			.collection("collection")
			.doc("document")
			.set({
				name: "New York",
				state: "CA",
				country: "USA",
			})
			.then(() => {
				console.log("Document successfully written!");
			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});
	};

	// add documents to  a collection
	const addWithOutId = () => {
		// Set a new
		// Set method needs to specify the doc id which means doc id wont auto generated
		fireStoreDb
			.collection("cities")
			.add({
				name: "Assigned Id",
				state: "AI",
				country: "USA",
			})
			.then(() => {
				console.log("Document successfully written!");
			})
			.catch((error) => {
				console.error("Error writing document: ", error);
			});
	};
	return (
		<div>
			<h1>cities screen</h1>

			<button onClick={addWithId} className="btn btn-secondary m-5">
				Set cities with passing assigned doc Id
			</button>

			<button className="btn btn-success m-5" onClick={addWithOutId}>
				Add cities withoutassigned doc Id
			</button>
		</div>
	);
};

export default CitesScreen;
