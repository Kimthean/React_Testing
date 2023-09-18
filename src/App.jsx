import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import LiveCam from "./pages/LiveCam";
import News from "./pages/News";
import Photo from "./pages/Photo";

import "./sass/style.css";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/News" element={<News />} />
				<Route path="/LiveCam" element={<LiveCam />} />
				<Route path="/Photo" element={<Photo />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
