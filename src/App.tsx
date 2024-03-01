import "./App.css";
import { Container } from "@mui/material";
import { Provider } from "react-redux";

import store from "./redux/store";
import Navbar from "./components/Navbar";
import CharactersGrid from "./components/characters/CharactersGrid";

function App() {
	return (
		<Provider store={store}>
			<Container maxWidth="xl">
				<Navbar />
				<CharactersGrid />
			</Container>
		</Provider>
	);
}

export default App;
