import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./ThemeColor.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Router>
			<ThemeProvider theme={Theme}>
				<App />
			</ThemeProvider>
		</Router>
	</React.StrictMode>
);
