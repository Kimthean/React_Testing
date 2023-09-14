import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the ToggleIcon component with the custom SVG
function ToggleIcon() {
	return (
		<svg
			width="18"
			height="14"
			viewBox="0 0 18 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 0V2H18V0H0ZM0 8H18V6H0V8ZM0 14H18V12H0V14Z" fill="white" />
		</svg>
	);
}

function Header() {
	return (
		<div className="container">
			<div className="site-content">
				<div className="site-header">
					<Navbar expand="lg">
						<Navbar.Brand as={Link} to="/" className="branding">
							<img src="/src/assets/images/logo.png" alt="" className="logo" />
							<div className="logo-type">
								<h1 className="site-title">Company name</h1>
								<small className="site-description">tagline goes here</small>
							</div>
						</Navbar.Brand>

						{/* Place the custom ToggleIcon within the Navbar.Toggle */}
						<Navbar.Toggle aria-controls="basic-navbar-nav">
							<ToggleIcon />
						</Navbar.Toggle>

						<Navbar.Collapse id="main-navigation">
							<Nav className="menu">
								<Nav.Link
									as={Link}
									to="/"
									className="menu-item current-menu-item"
								>
									Home
								</Nav.Link>
								<Nav.Link as={Link} to="/News" className="menu-item">
									News
								</Nav.Link>
								<Nav.Link as={Link} to="/LiveCam" className="menu-item">
									Live cameras
								</Nav.Link>
								<Nav.Link as={Link} to="/Photos" className="menu-item">
									Photos
								</Nav.Link>
								<Nav.Link as={Link} to="/Contact" className="menu-item">
									Contact
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
		</div>
	);
}

export default Header;
