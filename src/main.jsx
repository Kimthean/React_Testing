import { createRoot } from "react-dom/client";
import React, { useEffect } from "react";
import App from "./App.jsx";
import "./index.css";

function Main() {
	useEffect(() => {
		// Cloning main navigation for mobile menu
		const mobileNav = document.querySelector(".mobile-navigation");
		const mainNav = document.querySelector(".main-navigation .menu");
		if (mobileNav && mainNav) {
			mobileNav.appendChild(mainNav.cloneNode(true));
		}

		// Mobile menu toggle
		const menuToggle = document.querySelector(".menu-toggle");
		const mobileNavigation = document.querySelector(".mobile-navigation");
		if (menuToggle && mobileNavigation) {
			menuToggle.addEventListener("click", () => {
				mobileNavigation.classList.toggle("open");
			});
		}
	}, []);

	return (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
}

// Render the app using createRoot
createRoot(document.getElementById("root")).render(<Main />);
