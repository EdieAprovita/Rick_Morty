import {
	FETCH_CHARACTERS_START,
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_FAILURE,
} from "../constants";
import { CharactersResponse } from "../../models/Character";

interface CharactersState {
	loading: boolean;
	characters: CharactersResponse | null;
	error: string | null;
}

export const initialState: CharactersState = {
	loading: false,
	characters: null,
	error: null,
};

export type CharactersAction =
	| { type: typeof FETCH_CHARACTERS_START }
	| { type: typeof FETCH_CHARACTERS_SUCCESS; payload: CharactersResponse }
	| { type: typeof FETCH_CHARACTERS_FAILURE; payload: string };

export const charactersReducer = (
	state = initialState,
	action: CharactersAction
): CharactersState => {
	switch (action.type) {
		case FETCH_CHARACTERS_START:
			return {
				...state,
				loading: true,
			};
		case FETCH_CHARACTERS_SUCCESS:
			return {
				...state,
				loading: false,
				characters: action.payload,
			};
		case FETCH_CHARACTERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
