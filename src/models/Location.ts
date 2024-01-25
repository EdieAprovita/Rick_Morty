import { InfoResponse } from "./Api";

export interface LocationSchema {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: string;
}

export interface LocationsResponse {
	info: InfoResponse;
	results: Location[];
}
