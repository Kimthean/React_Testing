import React from "react";

class Header extends React.Component {
	render() {
		return (
			<div className="site-content">
				<div className="site-header">
					<div className="container">
						<a href="index.html" className="branding">
							<img src="/src/assets/images/logo.png" alt="" className="logo" />
							<div className="logo-type">
								<h1 className="site-title">Company name</h1>
								<small className="site-description">tagline goes here</small>
							</div>
						</a>

						<div className="main-navigation">
							<button type="button" className="menu-toggle">
								<i className="fa fa-bars"></i>
							</button>
							<ul className="menu">
								<li className="menu-item current-menu-item">
									<a href="Home">Home</a>
								</li>
								<li className="menu-item">
									<a href="news">News</a>
								</li>
								<li className="menu-item">
									<a href="live-cameras">Live cameras</a>
								</li>
								<li className="menu-item">
									<a href="photos">Photos</a>
								</li>
								<li className="menu-item">
									<a href="contact">Contact</a>
								</li>
							</ul>
						</div>

						<div className="mobile-navigation"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
