import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BASE_URL } from "../constants";
import { EpisodeSchema, EpisodesResponse } from "../../models/Episode";

interface EpisodesState {
    loading: boolean;
    episodes: EpisodeSchema[] | null;
    error: string | null;
    pages: number;
    count: number;
}

const initialState: EpisodesState = {
    loading: false,
    episodes: null,
    error: null,
    pages: 0,
    count: 0,
};

export const fetchEpisodes = createAsyncThunk(
    "episodes/fetchEpisodes",
    async (page: number, { rejectWithValue }) => {
        try {
            const response = await axios.get<EpisodesResponse>(
                `${BASE_URL}/episode?page=${page}`
            );
            return response.data;
        } catch (error) {
            const err = error as AxiosError;
            return rejectWithValue(err.message);
        }
    }
);

const episodesSlice = createSlice({
    name: "episodes",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchEpisodes.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEpisodes.fulfilled, (state, action) => {
                state.loading = false;
                state.episodes = action.payload.results;
                state.pages = action.payload.info.pages ?? 0;
                state.count = action.payload.info.count ?? 0;
            })
            .addCase(fetchEpisodes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default episodesSlice.reducer;
