import "./App.css";
import { Container } from "@mui/material";
import { Provider } from "react-redux";

import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<Container>
				<h1>Hello World</h1>
			</Container>
		</Provider>
	);
}

export default App;
