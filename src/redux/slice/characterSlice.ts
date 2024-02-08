import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../constants";
import { CharacterSchema, CharactersResponse } from "../../models/Character";

interface CharactersState {
	loading: boolean;
	characters: CharacterSchema[] | null;
	error: string | null;
	pages: number;
	count: number;
}

const initialState: CharactersState = {
	loading: false,
	characters: null,
	error: null,
	pages: 0,
	count: 0,
};

export const fetchCharacters = createAsyncThunk(
	"characters/fetchCharacters",
	async (page: number, { rejectWithValue }) => {
		try {
			const response = await axios.get<CharactersResponse>(
				`${BASE_URL}/character?page=${page}`
			);
			return response.data;
		} catch (error) {
			const err = error as AxiosError;
			return rejectWithValue(err.message);
		}
	}
);

const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCharacters.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCharacters.fulfilled, (state, action) => {
				state.loading = false;
				state.characters = action.payload.results;
				state.pages = action.payload.info.pages ?? 0;
				state.count = action.payload.info.count ?? 0;
			})
			.addCase(fetchCharacters.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default charactersSlice.reducer;
