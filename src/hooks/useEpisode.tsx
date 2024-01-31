import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchEpisodes } from "../redux/actions/episodeActions";
import { EpisodesResponse } from "../models/Episode";
import { BASE_URL } from "../redux/constants";

export const useEpisodes = (page: number) => {
	const dispatch = useDispatch<AppDispatch>();
	const episodes = useSelector((state: RootState) => state.episodes);
	const pages = useSelector((state: RootState) => state.episodes.pages);

	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");
	const [episodesData, setEpisodesData] = useState<EpisodesResponse | null>(null);

	useEffect(() => {
		const fetchEpisodesData = async () => {
			try {
				const response = await axios.get<EpisodesResponse>(
					`${BASE_URL}/episode?page=${page}`
				);
				setEpisodesData(response.data);
				dispatch(fetchEpisodes(response.data.results));
				console.log(response.data);
			} catch (error) {
				const axiosError = error as AxiosError;
				setError(axiosError.message);
			} finally {
				setLoading(false);
			}
		};

		fetchEpisodesData();
	}, [dispatch, page]);
	return { loading, error, episodesData, episodes, pages };
};
