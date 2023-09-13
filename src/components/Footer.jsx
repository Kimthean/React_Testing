import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faGooglePlus,
	faPinterest,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
	render() {
		return (
			<footer className="site-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<form action="#" className="subscribe-form">
								<input
									type="text"
									placeholder="Enter your email to subscribe..."
								/>
								<input type="submit" value="Subscribe" />
							</form>
						</div>
						<div className="col-md-3 col-md-offset-1">
							<div className="social-links">
								<a href="#">
									<FontAwesomeIcon icon={faFacebook} />
								</a>
								<a href="#">
									<FontAwesomeIcon icon={faTwitter} />
								</a>
								<a href="#">
									<FontAwesomeIcon icon={faGooglePlus} />
								</a>
								<a href="#">
									<FontAwesomeIcon icon={faPinterest} />
								</a>
							</div>
						</div>
					</div>

					<p className="colophon">
						Copyright 2014 Company name. Designed by Themezy. All rights
						reserved
					</p>
				</div>
			</footer>
		);
	}
}

export default Footer;
