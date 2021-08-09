import React, { useEffect } from "react";
import { useState } from "react";
import { fireStoreDb } from "../Firebase/firebaseConfig";

const useFireStore = (collection) => {
	const [docsHooks, setDocksHocks] = useState([]);

	useEffect(() => {
	const unsubscribe = fireStoreDb
		.collection(collection)
		.onSnapshot((querySnapShoot) => {
			let docs = [];
			querySnapShoot.forEach((item) => {
				docs.push(item.data());
			});
			setDocksHocks(docs);
		});
		return () => unsubscribe();
	}, [collection]);
	return { docsHooks };
};

export default useFireStore;
