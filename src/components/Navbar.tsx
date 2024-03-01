import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Navbar: React.FC = () => {
	const theme = useTheme();

	return (
		<AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
			<Toolbar>
				<Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex" }}>
						Rick and Morty
					</Typography>
					<Button color="inherit" component={Link} to="/">
						Home
					</Button>
					<Button color="inherit" component={Link} to="/characters">
						Characters
					</Button>
					<Button color="inherit" component={Link} to="/episodes">
						Episodes
					</Button>
					<Button color="inherit" component={Link} to="/locations">
						Locations
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
