import { InfoResponse } from "./Api";
import { CharacterSchema } from "./Character";

export interface EpisodeSchema {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: CharacterSchema[];
	url: string;
	created: string;
}

export interface EpisodesResponse {
	info: InfoResponse;
	results: EpisodeSchema[];
}

export interface EpisodesState {
	loading: boolean;
	episodes: EpisodeSchema[] | null;
	error: string | null;
	pages: number;
	count: number;
}
