import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const Main = () => {
	const [hotels, setHotels] = useState("");

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/hotels`)
			.then(res => setHotels(res.data))
			.catch(err => console.log(err));
	}, []);
	return (
		<div className="main">
			<section className="section-principale">
				<section className="partie-gauche-section1 ">
					<h3>Hébergements à Marseille</h3>
					<div className="container-article-gauche">
						{hotels && hotels.length ? (
							hotels.map((x, index) => (
								<article key={index}>
									<Link to={`/hotel/` + x._id}>
										<figure>
											<img src={x.imageUrl} alt={x.name} title={x.name} />

											<figcaption>
												<h5>{x.name}</h5>
												<p>
													Nuit à partir de {x.prix}
													<strong>€</strong>
												</p>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star gris"></i>
											</figcaption>
										</figure>
									</Link>
								</article>
							))
						) : (
							<h2>Loading ...</h2>
						)}
					</div>
					<h3>Afficher plus</h3>
				</section>
				<section className="partie-droite-section1">
					<h3>Les plus populaires</h3>
					<div className="container-article-droite">
						<article>
							<Link to="#">
								<figure>
									<img
										src="./assets/hebergements/1_xlarge/marcus-loke-WQJvWU_HZFo-unsplash.jpg"
										alt="Auberge La Cannebière"
									/>

									<figcaption>
										<h5>Auberge La Cannebière</h5>
										<p>
											Nuit à partir de 25 <strong>€</strong>
										</p>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star gris"></i>
									</figcaption>
								</figure>
							</Link>
						</article>
						<article>
							<Link to="#">
								<figure>
									<img
										src="./assets/hebergements/1_xlarge/marcus-loke-WQJvWU_HZFo-unsplash.jpg"
										alt="Auberge La Cannebière"
									/>

									<figcaption>
										<h5>Auberge La Cannebière</h5>
										<p>
											Nuit à partir de 25 <strong>€</strong>
										</p>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star gris"></i>
									</figcaption>
								</figure>
							</Link>
						</article>
						<article>
							<Link to="#">
								<figure>
									<img
										src="./assets/hebergements/1_xlarge/marcus-loke-WQJvWU_HZFo-unsplash.jpg"
										alt="Auberge La Cannebière"
									/>

									<figcaption>
										<h5>Auberge La Cannebière</h5>
										<p>
											Nuit à partir de 25 <strong>€</strong>
										</p>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star"></i>
										<i className="fas fa-star gris"></i>
									</figcaption>
								</figure>
							</Link>
						</article>
					</div>
				</section>
			</section>

			<section className="partie-basse">
				<h3>Activités à Marseille</h3>
				<div className="container-bas">
					<article>
						<Link to="#">
							<figure>
								<img
									src="./assets/activites/3_medium/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg"
									alt="Auberge La cannebière"
								/>
								<figcaption>
									<p>Vieux Por</p>
								</figcaption>
							</figure>
						</Link>
					</article>
					<div className="section-debut">
						<article>
							<Link to="#">
								<figure>
									<img
										src="./assets/activites/3_medium/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg"
										alt="Auberge La cannebière"
									/>
									<figcaption>
										<p>Vieux Po</p>
									</figcaption>
								</figure>
							</Link>
						</article>

						<article>
							<Link to="#">
								<figure>
									<img
										className="section2_img_activity1 img1_bis"
										src="./assets/activites/3_medium/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg"
										alt="Auberge La cannebière"
									/>
									<figcaption>
										<p>Vieux P</p>
									</figcaption>
								</figure>
							</Link>
						</article>
					</div>
					<article>
						<Link to="#">
							<figure>
								<img
									src="./assets/activites/3_medium/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg"
									alt="Auberge La cannebière"
								/>
								<figcaption>
									<p>Vieux Po</p>
								</figcaption>
							</figure>
						</Link>
					</article>
					<div className="section-fin">
						<article>
							<Link to="#">
								<figure>
									<img
										src="./assets/activites/3_medium/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg"
										alt="Auberge La cannebière"
									/>
									<figcaption>
										<p>Vieux Porta</p>
									</figcaption>
								</figure>
							</Link>
						</article>
						<article>
							<Link to="#">
								<figure>
									<img
										src="./assets/activites/3_medium/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg"
										alt="Auberge La cannebière"
									/>
									<figcaption>
										<p>Vieux Portab</p>
									</figcaption>
								</figure>
							</Link>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Main;
