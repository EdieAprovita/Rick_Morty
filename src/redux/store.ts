import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./slice/characterSlice";
import episodesSlice from "./slice/episodeSlice";

const store = configureStore({
	reducer: {
		character: characterSlice,
		episodes: episodesSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
