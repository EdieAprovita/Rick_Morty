import { InfoResponse } from "./Api";
import { EpisodeSchema } from "./Episode";
import {
	CharacterStatusEnums,
	CharacterGenderEnums,
	CharacterSpeciesEnums,
} from "./Enums";

export interface CharacterLocation {
	name: string;
	url: string;
}

export interface CharacterSchema {
	id: number;
	name: string;
	status: CharacterStatusEnums;
	species: CharacterSpeciesEnums;
	type: string;
	gender: CharacterGenderEnums;
	origin: CharacterLocation;
	location: CharacterLocation;
	image: string;
	episode: EpisodeSchema[];
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
