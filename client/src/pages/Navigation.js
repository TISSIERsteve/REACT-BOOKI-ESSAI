import React from "react";
import { Link } from "react-router-dom";
import Formulaire from "../components/Formulaire";

const Navigation = () => {
	return (
		<div className="container">
			<nav className="navigation">
				<Link to="/">
					<div>
						<img
							className="logo"
							src="../assets/logo/Booki.png"
							alt="Booki"
							title="Retour Accueil"
						></img>
					</div>
				</Link>
				<div className="brand">
					<Link to="seConnecter">
						<h3>Se connecter</h3>
					</Link>
					<h3>Hébergements</h3>
					<h3>Activités</h3>
				</div>
			</nav>
			<article>
				<h3>Trouvez votre hébergement pour des vacances de rêve</h3>
				<p>En plein centre ville ou en pleine nature</p>
			</article>
			<Formulaire></Formulaire>
		</div>
	);
};

export default Navigation;
