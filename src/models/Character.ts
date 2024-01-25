import { InfoResponse } from "./Api";

export interface CharacterLocation {
	name: string;
	url: string;
}

export interface CharacterSchema {
	id: number;
	name: string;
	status: "Alive" | "Dead" | "unknown";
	species: string;
	type: string;
	gender: "Female" | "Male" | "Genderless" | "unknown";
	origin: CharacterLocation;
	location: CharacterLocation;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

export interface CharactersResponse {
	info: InfoResponse;
	results: CharacterSchema[];
}

export interface CharactersState {
	loading: boolean;
	characters: CharacterSchema[] | null;
	error: string | null;
	pages: number;
	count: number;
}