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
import { CharacterSchema } from "../models";
import { AppDispatch } from "../redux/store";

interface CharacterCardProps {
	character: CharacterSchema;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				sx={{ height: 260, objectFit: "cover" }}
				component="img"
				image={character.image}
				alt={character.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{character.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{character.species}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					onClick={() =>
						dispatch({ type: "characters/deleteCharacter", payload: character.id })
					}>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default CharacterCard;
