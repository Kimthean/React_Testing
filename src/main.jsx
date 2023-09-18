import { createRoot } from "react-dom/client";
import React, { useEffect } from "react";
import App from "./App.jsx";
import "./index.css";

function Main() {
	return (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

// Render the app using createRoot
createRoot(document.getElementById("root")).render(<App />);
