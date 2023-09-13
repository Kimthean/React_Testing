import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import React from "react";

import Home from "./pages/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import "./sass/style.css";

function App() {
	return (
		<div>
			<div className="containers">
				<Header />
				<Hero />
				<Home />
				<Footer />
			</div>
		</div>
	);
}

export default App;
