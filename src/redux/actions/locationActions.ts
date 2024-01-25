import axios, { AxiosError } from "axios";
import { ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
	FETCH_LOCATIONS_START,
	FETCH_LOCATIONS_SUCCESS,
	FETCH_LOCATIONS_FAILURE,
	BASE_URL,
} from "../constants";
import { LocationsResponse } from "../../models/Location";

interface FetchLocationsStartAction {
	type: typeof FETCH_LOCATIONS_START;
}

interface FetchLocationsSuccessAction {
	type: typeof FETCH_LOCATIONS_SUCCESS;
	payload: LocationsResponse;
}

interface FetchLocationsFailureAction {
	type: typeof FETCH_LOCATIONS_FAILURE;
	payload: string;
}

export type LocationsAction =
	| FetchLocationsStartAction
	| FetchLocationsSuccessAction
	| FetchLocationsFailureAction;

export const fetchLocations = (): ThunkAction<
	Promise<void>,
	RootState,
	unknown,
	LocationsAction
> => {
	return async dispatch => {
		dispatch({ type: FETCH_LOCATIONS_START });
		try {
			const response = await axios.get<LocationsResponse>(`${BASE_URL}/location`);
			dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: response.data });
		} catch (error) {
			const err = error as AxiosError;
			dispatch({ type: FETCH_LOCATIONS_FAILURE, payload: err.message });
		}
	};
};
