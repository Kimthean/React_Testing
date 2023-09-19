import React, { useEffect, useState } from "react";
import axios from "axios";

function Photo() {
	const [row1Photos, setRow1Photos] = useState([]);
	const [row2Photos, setRow2Photos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const apiKey = "kBhfPhGPJ3znWxnqpHfLTX0TPQrFKM1uDF5vOPVhn5mnvw3HABH4IaBk";

		const fetchPhotos = (setPhotos) => {
			const randomPage = Math.floor(Math.random() * 99) + 1;
			const apiUrl = `https://api.pexels.com/v1/curated?per_page=6&page=${randomPage}`;

			axios
				.get(apiUrl, { headers: { Authorization: apiKey } })
				.then((response) => {
					setPhotos(response.data.photos);
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error fetching photos:", error);
				});
		};

		fetchPhotos(setRow1Photos);

		fetchPhotos(setRow2Photos);
	}, []);

	return (
		<div className="fullwidth-block">
			<div className="container">
				<div className="row">
					{loading ? (
						<p>Loading...</p>
					) : (
						row1Photos.map((photo) => (
							<div className="col-md-6" key={photo.id}>
								<div className="photo">
									<div
										className="photo-preview photo-detail"
										style={{
											backgroundImage: `url(${photo.src.medium})`,
										}}
									></div>
									<div className="photo-details">
										<h3 className="photo-title">
											<a href="#">{photo.photographer}</a>
										</h3>
										<p>{photo.photographer}</p>
										{}
									</div>
								</div>
							</div>
						))
					)}
				</div>

				{/* 2nd row */}
				<div className="row">
					{loading ? (
						<p>Loading...</p>
					) : (
						row2Photos.map((photo) => (
							<div className="col-md-6" key={photo.id}>
								<div className="photo">
									<div
										className="photo-preview photo-detail"
										style={{
											backgroundImage: `url(${photo.src.medium})`,
										}}
									></div>
									<div className="photo-details">
										<h3 className="photo-title">
											<a href="#">{photo.photographer}</a>
										</h3>
										<p>{photo.photographer}</p>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default Photo;
