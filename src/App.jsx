import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LiveCam from "./pages/LiveCam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "./sass/style.css";

function App() {
	return (
		<Router>
			<div className="container">
				<Header />
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/LiveCam" element={<LiveCam />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
