import React from "react";
import Rating from "./Rating";

const HotelItem = ({ hotel }) => {
	console.log(hotel);
	return (
		<div>
			{
				<ul className="details">
					<div className="details-image">
						<img src={hotel.imageUrl} alt={hotel.name} />
					</div>
					<div className="details-info">
						<ul>
							<li>
								<h4>Nom: {hotel.name}</h4>
							</li>
							<li>Ville: {hotel.city}</li>
							<li>Description: {hotel.description}</li>
							<li>Prix: {hotel.prix} € </li>
							<Rating
								rating={hotel.rating}
								numReviews={hotel.numReviews}
							></Rating>
							<br />
							<button>Voir les chambres</button>
						</ul>
					</div>
				</ul>
			}
		</div>
	);
};

export default HotelItem;
