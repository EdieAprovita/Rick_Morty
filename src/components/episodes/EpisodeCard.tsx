import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { EpisodeSchema } from "../../models";

interface EpisodeCardProps {
	episode: EpisodeSchema;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 260, objectFit: "cover" }}
				component="img"
				image={episode.url}
				alt={episode.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{episode.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Air Date: {episode.air_date}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Episode: {episode.episode}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default EpisodeCard;
