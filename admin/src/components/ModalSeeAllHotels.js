// import axios from "axios";
// import React, { useState } from "react";

// const { REACT_APP_API_URL } = process.env;

// const ModalSeeAllHotels = ({ hotels }) => {
// 	const [identifiants, setIdentifiants] = useState("");
// 	const [hotel, setHotels] = useState("");
// 	const [ville, setVille] = useState("");
// 	const [adresse, setAdresse] = useState("");
// 	const [tarif, setTarif] = useState("");
// 	const [description, setDescription] = useState("");

// 	// MODIFIER INFOS HOTELS
// 	const handleUpdateHotels = (id, name) => {
// 		if (hotel === "") {
// 			alert("Veuillez renseigner le nom de l'Hôtel");
// 		} else if (ville === "") {
// 			alert("Veuillez renseigner une Ville");
// 		} else if (adresse === "") {
// 			alert("Veuillez renseigner une Adresse");
// 		} else if (tarif === "") {
// 			alert("Veuillez renseigner un Tarif");
// 		} else if (description === "") {
// 			alert("Veuillez renseigner une Description");
// 		} else {
// 			if (
// 				window.confirm(`Si vous cliquez sur ok l'hôtel ${name} sera modifier`)
// 			)
// 				axios
// 					.put(`${REACT_APP_API_URL}api/hotels/` + id, {
// 						name: hotel,
// 						city: ville,
// 						address: adresse,
// 						description,
// 						prix: tarif,
// 					})
// 					.then(() => {
// 						alert(`Vous venez de modifier l'hôtel `);
// 						window.location.reload();
// 					})
// 					.catch(err => console.log(err));
// 		}
// 	};
// 	return (
// 		<div>
// 			{hotels && hotels.length ? (
// 				hotels.map(hotels => (
// 					<ul>
// 						<li>
// 							<label>Identifiants: </label>
// 							<input
// 								placeholder={hotels._id}
// 								required
// 								onChange={e => setIdentifiants(e.target.value)}
// 							></input>
// 						</li>
// 						<li>
// 							<label>Hôtel:</label>
// 							<input
// 								placeholder={hotels.name}
// 								required
// 								onChange={e => setHotels(e.target.value)}
// 							></input>
// 						</li>
// 						<li>
// 							<label>Ville:</label>
// 							<input
// 								placeholder={hotels.city}
// 								required
// 								onChange={e => setVille(e.target.value)}
// 							></input>
// 						</li>
// 						<li>
// 							<label>Adresse:</label>
// 							<input
// 								placeholder={hotels.address}
// 								required
// 								onChange={e => setAdresse(e.target.value)}
// 							></input>
// 						</li>
// 						<li>
// 							<label>Tarif:</label>
// 							<input
// 								placeholder={hotels.prix}
// 								required
// 								onChange={e => setTarif(e.target.value)}
// 							></input>
// 						</li>
// 						<li className="description">
// 							<label>Description:</label>
// 							<div>
// 								<input
// 									placeholder={hotels.description}
// 									required
// 									onChange={e => setDescription(e.target.value)}
// 								></input>
// 							</div>
// 						</li>
// 						<button onClick={() => handleUpdateHotels(hotel._id)}>
// 							<i className="fas fa-check add" />
// 						</button>
// 					</ul>
// 				))
// 			) : (
// 				<h2>Loading ...</h2>
// 			)}
// 		</div>
// 	);
// };

// export default ModalSeeAllHotels;
