import React from "react";
import { Link } from "react-router-dom";

const TableauBordGaucheItem = () => {
	return (
		<div className="container-gauche">
			<section>
				<h3></h3>
				<ul>
					<li>
						<Link to="/">
							<i className="fas fa-table"></i>
							Tableau de bord
						</Link>
					</li>
				</ul>
				<div className="div1">
					<h3>Nouveau</h3>
					<ul>
						<li>
							<Link to="newClient">
								<i className="fas fa-user"></i>
								Nouveau Client
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="newHotel">
								<i className="fas fa-hotel"></i>
								Nouvel Hôtel
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">
								<i className="fas fa-bed"></i>Nouvelle Chambre
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">
								<i className="fas fa-truck"></i>
								Livraisons
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">Options</Link>
						</li>
					</ul>
				</div>
				<div className="div2">
					<h3>Messages</h3>
					<ul>
						<li>
							<Link to="#">
								<i className="fas fa-bell"></i>
								Notifications
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">
								<i className="fas fa-envelope"></i>Messages
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">Options</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">Options</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">Options</Link>
						</li>
					</ul>
				</div>
				<div className="div3">
					<h3>Informations</h3>
					<ul>
						<li>
							<Link to="seeAllClients">
								<i className="fas fa-user"></i>
								Client
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">
								<i className="fas fa-hotel"></i>Hôtel
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">
								<i className="fas fa-bed"></i>
								Chambre
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">
								<i className="fas fa-truck"></i>
								Livraisons
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to="#">
								<i className="fas fa-calendar-check"></i>
								Agenda
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default TableauBordGaucheItem;
