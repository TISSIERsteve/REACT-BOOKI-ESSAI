import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<section className="section-footer">
			<article>
				<h3>A propos</h3>
				<ul>
					<Link to="#">
						<li>Fonctionneement du site</li>
					</Link>
					<Link to="#">
						<li>Conditions génèrales de ventes</li>
					</Link>
					<Link to="#">
						<li>Données et confidentialité</li>
					</Link>
				</ul>
			</article>
			<article>
				<h3>Nos hébergements</h3>
				<ul>
					<Link to="#">
						<li>Charte de qualité</li>
					</Link>
					<Link to="#">
						<li>Soumettre votre hôtel</li>
					</Link>
				</ul>
			</article>
			<article>
				<h3>Assistance</h3>
				<ul>
					<Link to="#">
						<li>Centre d'aide</li>
					</Link>
					<Link to="#">
						<li>Nous contacter</li>
					</Link>
				</ul>
			</article>
		</section>
	);
};

export default Footer;
