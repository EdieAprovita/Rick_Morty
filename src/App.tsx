import "./App.css";
import { Container } from "@mui/material";
import { Provider } from "react-redux";

import store from "./redux/store";
import CharactersGrid from "./components/CharactersGrid";

function App() {
	return (
		<Provider store={store}>
			<Container>
				<h1>Hello World</h1>
				<CharactersGrid characters={null} />
			</Container>
		</Provider>
	);
}

export default App;
