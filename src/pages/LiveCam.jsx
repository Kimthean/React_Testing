import React from "react";

class LiveCam extends React.Component {
	render() {
		return (
			<div className="fullwidth-block">
				<div className="container">
					<div className="filter">
						<div className="country filter-control">
							<label htmlFor="">Country</label>
							<span className="select control">
								<select name="" id="">
									<option value="">All Countries</option>
								</select>
							</span>
						</div>
						<div className="count filter-control">
							<label htmlFor="">Show per page</label>
							<span className="select control">
								<select name="" id="">
									<option value="">1</option>
									<option value="">2</option>
									<option value="">3</option>
									<option value="">4</option>
									<option value="">5</option>
									<option value="">6</option>
									<option value="">7</option>
									<option value="">8</option>
									<option value="">9</option>
									<option value="">10</option>
								</select>
							</span>
						</div>
						<div className="quality filter-control">
							<label htmlFor="">Only high quality</label>
							<span className="select control">
								<select name="" id="">
									<option value="">Yes</option>
									<option value="">No</option>
								</select>
							</span>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<div className="live-camera">
								<figure className="live-camera-cover">
									<img src="/src/assets/images/live-camera-1.jpg" alt="" />
								</figure>
								<h3 className="location">New York</h3>
								<small className="date">8 oct, 8:00AM</small>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="live-camera">
								<figure className="live-camera-cover">
									<img src="/src/assets/images/live-camera-2.jpg" alt="" />
								</figure>
								<h3 className="location">Los Angeles</h3>
								<small className="date">8 oct, 8:00AM</small>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="live-camera">
								<figure className="live-camera-cover">
									<img src="/src/assets/images/live-camera-3.jpg" alt="" />
								</figure>
								<h3 className="location">Chicago</h3>
								<small className="date">8 oct, 8:00AM</small>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="live-camera">
								<figure className="live-camera-cover">
									<img src="/src/assets/images/live-camera-4.jpg" alt="" />
								</figure>
								<h3 className="location">London</h3>
								<small className="date">8 oct, 8:00AM</small>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<div className="live-camera">
								<figure className="live-camera-cover">
									<img src="/src/assets/images/live-camera-5.jpg" alt="" />
								</figure>
								<h3 className="location">New York</h3>
								<small className="date">8 oct, 8:00AM</small>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="live-camera">
								<figure className="live-camera-cover">
									<img src="/src/assets/images/live-camera-6.jpg" alt="" />
								</figure>
								<h3 className="location">Los Angeles</h3>
								<small className="date">8 oct, 8:00AM</small>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="live-camera">
								<figure className="live-camera-cover">
									<img src="/src/assets/images/live-camera-7.jpg" alt="" />
								</figure>
								<h3 className="location">Chicago</h3>
								<small className="date">8 oct, 8:00AM</small>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="live-camera">
								<figure className="live-camera-cover">
									<img src="/src/assets/images/live-camera-8.jpg" alt="" />
								</figure>
								<h3 className="location">London</h3>
								<small className="date">8 oct, 8:00AM</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LiveCam;
