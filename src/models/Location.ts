export interface LocationSchema {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: string;
}

export interface InfoLocationResponse {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface LocationsResponse {
	info: InfoLocationResponse;
	results: Location[];
}
