import React, { useState } from "react";
import { Grid, Stack, Pagination, Typography } from "@mui/material";

import { useCharacters } from "../hooks/useCharacters";
import { CharactersResponse } from "../models/Character";

interface GridProps {
	characters: CharactersResponse | null;
}

const CharactersGrid: React.FC<GridProps> = () => {
	const [page, setPage] = useState<number>(1);
	const { charactersData, characters, loading, error } = useCharacters();
	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
					<Typography variant="h4" component="h1">
						Characters
					</Typography>
					<Pagination count={34} page={page} onChange={handleChange} />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default CharactersGrid;
