import React, { useEffect } from "react";
import { useState } from "react";
import { fireStoreDb } from "../Firebase/firebaseConfig";

const useFireStore = (collection) => {
	const [docsHooks, setDocksHocks] = useState([]);

	useEffect(() => {
		fireStoreDb.collection(collection).onSnapshot((querySnapShoot) => {
			let docs = [];
			querySnapShoot.forEach((item) => {
				docs.push(item.data());
			});
			setDocksHocks(docs);
		});
	}, [collection]);
	return { docsHooks };
};

export default useFireStore;
