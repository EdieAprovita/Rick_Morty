import {
	FETCH_EPISODES_START,
	FETCH_EPISODES_SUCCESS,
	FETCH_EPISODES_RESPONSE,
	FETCH_EPISODES_FAILURE,
} from "../constants";
import { EpisodesResponse } from "../../models/Episode";

interface EpisodesState {
	loading: boolean;
	episodes: EpisodesResponse | null;
	error: string | null;
	pages: number;
	count: number;
}

export const initialState: EpisodesState = {
	loading: false,
	episodes: null,
	error: null,
	pages: 0,
	count: 0,
};

export type EpisodesAction =
	| { type: typeof FETCH_EPISODES_START }
	| { type: typeof FETCH_EPISODES_SUCCESS; payload: EpisodesResponse }
	| { type: typeof FETCH_EPISODES_RESPONSE; payload: EpisodesResponse }
	| { type: typeof FETCH_EPISODES_FAILURE; payload: string };

export const episodesReducer = (
	state = initialState,
	action: EpisodesAction
): EpisodesState => {
	switch (action.type) {
		case FETCH_EPISODES_START:
			return {
				...state,
				loading: true,
			};
		case FETCH_EPISODES_SUCCESS:
			return {
				...state,
				loading: false,
				episodes: action.payload,
			};
		case FETCH_EPISODES_RESPONSE:
			return {
				...state,
				loading: false,
				pages: action.payload.info.pages ?? 0,
				count: action.payload.info.count ?? 0,
			};
		case FETCH_EPISODES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
