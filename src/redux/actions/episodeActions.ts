import axios, { AxiosError } from "axios";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
	FETCH_EPISODES_START,
	FETCH_EPISODES_SUCCESS,
	FETCH_EPISODES_RESPONSE,
	FETCH_EPISODES_FAILURE,
	BASE_URL,
} from "../constants";
import { EpisodesResponse, EpisodeSchema } from "../../models/Episode";

export type ThunkResult<R> = ThunkAction<R, RootState, unknown, EpisodesAction>;

interface FetchEpisodesStartAction {
	type: typeof FETCH_EPISODES_START;
}

interface FetchEpisodesSuccessAction {
	type: typeof FETCH_EPISODES_SUCCESS;
	payload: EpisodeSchema[];
}

interface FetchEpisodesResponseAction {
	type: typeof FETCH_EPISODES_RESPONSE;
	payload: EpisodesResponse;
}

interface FetchEpisodesFailureAction {
	type: typeof FETCH_EPISODES_FAILURE;
	payload: string;
}

export type EpisodesAction =
	| FetchEpisodesStartAction
	| FetchEpisodesSuccessAction
	| FetchEpisodesResponseAction
	| FetchEpisodesFailureAction;

export const fetchEpisodes = (
	episodes: EpisodeSchema[]
): ThunkAction<Promise<void>, RootState, unknown, EpisodesAction> => {
	return async dispatch => {
		dispatch({ type: FETCH_EPISODES_START });
		try {
			const response = await axios.get<EpisodesResponse>(`${BASE_URL}/episode`);
			dispatch({ type: FETCH_EPISODES_RESPONSE, payload: response.data });
			dispatch({ type: FETCH_EPISODES_SUCCESS, payload: episodes });
		} catch (error) {
			const err = error as AxiosError;
			dispatch({ type: FETCH_EPISODES_FAILURE, payload: err.message });
		}
	};
};
