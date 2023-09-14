import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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

						<Navbar.Toggle aria-controls="basic-navbar-nav" />

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
