import {
	FETCH_LOCATIONS_START,
	FETCH_LOCATIONS_SUCCESS,
	FETCH_LOCATIONS_FAILURE,
} from "../constants";
import { LocationsResponse } from "../../models/Location";

interface LocationsState {
	loading: boolean;
	locations: LocationsResponse | null;
	error: string | null;
}

export const initialState: LocationsState = {
	loading: false,
	locations: null,
	error: null,
};

export type LocationsAction =
	| { type: typeof FETCH_LOCATIONS_START }
	| { type: typeof FETCH_LOCATIONS_SUCCESS; payload: LocationsResponse }
	| { type: typeof FETCH_LOCATIONS_FAILURE; payload: string };

export const locationsReducer = (
	state = initialState,
	action: LocationsAction
): LocationsState => {
	switch (action.type) {
		case FETCH_LOCATIONS_START:
			return {
				...state,
				loading: true,
			};
		case FETCH_LOCATIONS_SUCCESS:
			return {
				...state,
				loading: false,
				locations: action.payload,
			};
		case FETCH_LOCATIONS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
