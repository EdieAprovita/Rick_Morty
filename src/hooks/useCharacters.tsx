import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchCharacters } from "../redux/actions/characterActions";
import { CharactersResponse } from "../models/Character";
import { BASE_URL } from "../redux/constants";

export const useCharacters = () => {
	const dispatch = useDispatch<AppDispatch>();
	const characters = useSelector((state: RootState) => state.characters);
	const pages = useSelector((state: RootState) => state.characters.pages);

	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>("");
	const [charactersData, setCharactersData] = useState<CharactersResponse | null>(null);

	useEffect(() => {
		const fetchCharactersData = async () => {
			try {
				const response = await axios.get<CharactersResponse>(`${BASE_URL}/character`);
				setCharactersData(response.data);
				console.log(response.data);
				dispatch(fetchCharacters(response.data.results));
			} catch (error) {
				const axiosError = error as AxiosError;
				setError(axiosError.message);
			} finally {
				setLoading(false);
			}
		};

		fetchCharactersData();
	}, [dispatch, charactersData]);
	return { loading, error, charactersData, characters, pages };
};
