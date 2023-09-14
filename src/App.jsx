import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import LiveCam from "./pages/LiveCam";
import "./sass/style.css";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/LiveCam" element={<LiveCam />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
