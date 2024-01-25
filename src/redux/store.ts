import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
	reducer: rootReducer,
});

type AppDispatch = typeof store.dispatch;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type { AppDispatch };
