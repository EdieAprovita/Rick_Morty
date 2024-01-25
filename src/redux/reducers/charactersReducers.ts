import {
	FETCH_CHARACTERS_START,
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_RESPONSE,
	FETCH_CHARACTERS_FAILURE,
} from "../constants";
import { CharactersResponse, CharacterSchema } from "../../models/Character";

interface CharactersState {
	loading: boolean;
	characters: CharacterSchema[] | null;
	error: string | null;
	pages: number;
	count: number;
}

export const initialState: CharactersState = {
	loading: false,
	characters: null,
	error: null,
	pages: 0,
	count: 0,
};

export type CharactersAction =
	| { type: typeof FETCH_CHARACTERS_START }
	| { type: typeof FETCH_CHARACTERS_SUCCESS; payload: CharacterSchema[] }
	| { type: typeof FETCH_CHARACTERS_RESPONSE; payload: CharactersResponse }
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
		case FETCH_CHARACTERS_RESPONSE:
			return {
				...state,
				loading: false,
				pages: (action.payload as CharactersResponse).info.pages,
				count: (action.payload as CharactersResponse).info.count,
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
