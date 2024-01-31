import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CharacterSchema } from "../models";

interface CharacterCardProps {
	character: CharacterSchema;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
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
					Name: {character.species}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Status: {character.status}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Location: {character.location.name}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CharacterCard;
