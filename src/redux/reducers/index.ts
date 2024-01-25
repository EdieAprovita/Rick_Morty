import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducers";
import { episodesReducer } from "./episodesReducers";
import { locationsReducer } from "./locationsReducers";

const rootReducer = combineReducers({
	characters: charactersReducer,
	episodes: episodesReducer,
	locations: locationsReducer,
});

export interface RootState {
	characters: ReturnType<typeof charactersReducer>;
	episodes: ReturnType<typeof episodesReducer>;
	locations: ReturnType<typeof locationsReducer>;
}

export default rootReducer;
