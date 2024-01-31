import React from "react";
import { useDispatch } from "react-redux";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@mui/material";
import { CharacterSchema, EpisodeSchema, LocationSchema } from "../models";
import { AppDispatch } from "../redux/store";

type GenericData = CharacterSchema | EpisodeSchema | LocationSchema;

interface GenericCardProps {
	data: GenericData;
}

const GenericCard: React.FC<GenericCardProps> = ({ data }) => {
	const dispatch = useDispatch<AppDispatch>();

	const isCharacter = (data: GenericData): data is CharacterSchema => "image" in data;
	const isEpisode = (data: GenericData): data is EpisodeSchema => "episode" in data;
	const isLocation = (data: GenericData): data is LocationSchema => "dimension" in data;

	return (
		<Card sx={{ maxWidth: 345 }}>
			{isCharacter(data) && (
				<>
					<CardMedia
						sx={{ height: 260, objectFit: "cover" }}
						component="img"
						image={data.image}
						alt={data.name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{data.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{data.species}
						</Typography>
					</CardContent>
					<CardActions>
						<Button
							size="small"
							onClick={() =>
								dispatch({ type: "characters/deleteCharacter", payload: data.id })
							}>
							Delete
						</Button>
					</CardActions>
				</>
			)}

			{isEpisode(data) && (
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{data.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{`Episode: ${data.episode}`}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{`Air Date: ${data.air_date}`}
					</Typography>
				</CardContent>
			)}

			{isLocation(data) && (
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{data.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{`Type: ${data.type}`}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{`Dimension: ${data.dimension}`}
					</Typography>
				</CardContent>
			)}
		</Card>
	);
};

export default GenericCard;
