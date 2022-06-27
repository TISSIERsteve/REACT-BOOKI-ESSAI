import React from "react";
import Formulaire from "../components/Formulaire";

const Navigation = () => {
	return (
		<div className="container">
			<nav className="navigation">
				<div>
					<img
						className="logo"
						src="../assets/logo/Booki.png"
						alt="Booki"
					></img>
				</div>
				<div className="brand">
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
