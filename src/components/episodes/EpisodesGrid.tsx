import React, { useEffect, useState } from "react";
import { Grid, Stack, Pagination, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "../../redux/slice/episodeSlice";
import { AppDispatch, RootState } from "../../redux/store";
import EpisodeCard from "./EpisodeCard";

const EpisodesGrid: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const dispatch = useDispatch<AppDispatch>();
	const { loading, error, episodes, pages } = useSelector(
		(state: RootState) => state.episodes
	);

	useEffect(() => {
		dispatch(fetchEpisodes(page));
	}, [dispatch, page]);

	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	return (
		<>
			<Grid
				container
				spacing={5}
				justifyContent="flex-start"
				style={{ alignItems: "flex-start" }}>
				{episodes?.map(episode => (
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
