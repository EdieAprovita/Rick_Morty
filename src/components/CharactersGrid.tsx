import React, { useState } from "react";
import { Grid, Stack, Pagination, Typography } from "@mui/material";

import { useCharacters } from "../hooks/useCharacters";
import { CharactersResponse } from "../models/Character";
import CharacterCard from "./CharacterCard";

interface GridProps {
	characters: CharactersResponse | null;
}

const CharactersGrid: React.FC<GridProps> = () => {
	const [page, setPage] = useState<number>(1);
	const { charactersData, loading, error, pages } = useCharacters();
	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const storeCharacters = localStorage.getItem("characters");
	const storedCharactersData: CharactersResponse = storeCharacters
		? JSON.parse(storeCharacters)
		: null;

	if (charactersData && !storedCharactersData) {
		localStorage.setItem("characters", JSON.stringify(charactersData));
	}

	return (
		<>
			<Grid container spacing={5} justifyContent="center">
				{charactersData?.results.map(character => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
						<CharacterCard character={character} />
					</Grid>
				))}
			</Grid>
			<Stack spacing={2} sx={{ marginTop: 2 }}>
				<Pagination
					count={pages}
					page={page}
					onChange={handleChange}
					variant="outlined"
					shape="rounded"
					sx={{ display: "flex", justifyContent: "center", marginY: 2 }}
				/>
				{loading && <Typography variant="h6">Loading...</Typography>}
				{error && <Typography variant="h6">Error</Typography>}
			</Stack>
		</>
	);
};

export default CharactersGrid;
