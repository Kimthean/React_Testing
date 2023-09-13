import React from "react";

class Hero extends React.Component {
	render() {
		return (
			<div
				className="hero"
				style={{ backgroundImage: 'url("/src/assets/images/banner.png")' }}
			>
				<div className="container">
					<form action="#" className="find-location">
						<input type="text" placeholder="Find your location..." />
						<input type="submit" value="Find" />
					</form>
				</div>
			</div>
		);
	}
}

export default Hero;
