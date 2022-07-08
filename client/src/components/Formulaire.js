import React from "react";
import { Link } from "react-router-dom";

const Formulaire = () => {
	return (
		<div className="form-container">
			<form>
				<i className="fas fa-map-marker-alt position"></i>
				<label htmlFor="form"></label>
				<input id="form" type="text" placeholder="Marseille,France" />
				<button>Rechercher</button>
			</form>

			{/* <article className="article-form">
				<h2>Filtres</h2>

				<Link to="#">
					<i className="fas fa-money-bill-wave"></i>Economique
				</Link>
				<Link to="#">
					<i className="fas fa-child"></i>Familial
				</Link>
				<Link to="#">
					<i className="fas fa-heart"></i>Romantiques
				</Link>
				<Link to="#">
					<i className="fas fa-dog"></i>Animaux autorisés
				</Link>
			</article> */}

			<article className="article-form2">
				<Link to="#">
					<i className="fas fa-info"></i>
				</Link>

				<p>Plus de 500 logements sont disponibles dans cette ville</p>
			</article>
		</div>
	);
};

export default Formulaire;
