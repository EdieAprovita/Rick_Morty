export interface InfoResponse {
	count: number;
	pages: number;
	next: string | null;
	prev: string | null;
}

export interface ApiResponseParams {
	page?: number;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
}

export interface ApiResponse<T> {
	info: InfoResponse;
	results: T[];
}
