import axios, { AxiosError } from "axios";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
	FETCH_CHARACTERS_START,
	FETCH_CHARACTERS_SUCCESS,
	FETCH_CHARACTERS_FAILURE,
	BASE_URL,
} from "../constants";
import { CharactersResponse } from "../../models/Character";

interface FetchCharactersStartAction {
	type: typeof FETCH_CHARACTERS_START;
}

interface FetchCharactersSuccessAction {
	type: typeof FETCH_CHARACTERS_SUCCESS;
	payload: CharactersResponse;
}

interface FetchCharactersFailureAction {
	type: typeof FETCH_CHARACTERS_FAILURE;
	payload: string;
}

export type CharactersAction =
	| FetchCharactersStartAction
	| FetchCharactersSuccessAction
	| FetchCharactersFailureAction;

export const fetchCharacters = (): ThunkAction<
	Promise<void>,
	RootState,
	unknown,
	CharactersAction
> => {
	return async dispatch => {
		dispatch({ type: FETCH_CHARACTERS_START });
		try {
			const response = await axios.get<CharactersResponse>(`${BASE_URL}/character`);
			dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data });
		} catch (error) {
			const err = error as AxiosError;
			dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err.message });
		}
	};
};
