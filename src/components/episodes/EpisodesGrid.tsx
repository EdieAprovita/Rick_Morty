import React, { useState } from "react";
import { Grid, Stack, Pagination, Typography } from "@mui/material";

import { useEpisodes } from "../../hooks/useEpisode";
import { EpisodesResponse } from "../../models/Episode";
import EpisodeCard from "./EpisodeCard";

interface GridProps {
	episodes: EpisodesResponse | null;
}

const EpisodesGrid: React.FC<GridProps> = () => {
	const [page, setPage] = useState<number>(1);
	const { episodesData, loading, error, pages } = useEpisodes(page);
	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	const storeEpisodes = localStorage.getItem("episodes");
	const storedEpisodesData: EpisodesResponse = storeEpisodes
		? JSON.parse(storeEpisodes)
		: null;

	if (episodesData && !storedEpisodesData) {
		localStorage.setItem("episodes", JSON.stringify(episodesData));
	}

	return (
		<>
			<Grid
				container
				spacing={5}
				justifyContent="flex-start"
				style={{ alignItems: "flex-start" }}>
				{episodesData?.results.map(episode => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={episode.id}>
						<EpisodeCard episode={episode} />
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

export default EpisodesGrid;
