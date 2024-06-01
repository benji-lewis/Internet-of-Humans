class IoHelpers {
	fetchUserFromDb(userId: IoH.uid):IoH.userData {
		// Fetch data from DB using UID
		return {"drinks": 3, "toilet": 2, "tentVisits": 1, "lastUpdated": 1234567890};
	}

	// fetchDataFromDb(dataType:IoH.dataType):IoH.userData {
	// 	// Not sure what this is supposed to do
	// }

	incrementCounter(userId:IoH.uid, counter:IoH.dataType):IoH.statusResponse {
		// Fetch current counter value
		// Increment counter value
		return {"status": 200, "newValue": 4};
	}

	checkUserSecret(userId: IoH.uid, userSecret: IoH.userSecret) {
		// Fecth user record from DB
		// Compare userSecret with DB value
		return true;
	}
};

export default IoHelpers;