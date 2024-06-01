declare namespace IoH {
	type uid = string;
	type userSecret = string;
	type dataType = "drinks" | "toilet" | "status" | "tentVisits";
	
	interface userDatum {
		type: dataType;
		data: any;
	}
	
	interface userData {
		drinks?: number;
		toilet?: number;
		tentVisits?: number;
		lastUpdated: EpochTimeStamp;
	}

	interface statusResponse {
		status: number;
		newValue: number;
	}
}