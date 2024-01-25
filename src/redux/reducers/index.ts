import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducers";
import { episodesReducer } from "./episodesReducers";
import { locationsReducer } from "./locationsReducers";
import {
	CharactersState,EpisodesState,LocationsState
} from "../../models/index";

const rootReducer = combineReducers({
	characters: charactersReducer,
	episodes: episodesReducer,
	locations: locationsReducer,
});

export interface RootState {
	characters: CharactersState;
	episodes: EpisodesState;
	locations: LocationsState;
}

export default rootReducer;
