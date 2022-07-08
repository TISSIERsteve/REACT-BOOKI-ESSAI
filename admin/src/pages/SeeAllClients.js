import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const { REACT_APP_API_URL } = process.env;

const SeeAllClients = () => {
	const [clients, setClients] = useState("");
	const [isActive, setisActive] = useState({ id: null, active: false });
	const [nom, setNom] = useState("");
	const [email, setEmail] = useState("");
	const [ville, setVille] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");

	// TEST REGEX
	const nomRegex = /(.*[A-Za-z]){3,30}/;
	let mailRegex =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
	let phoneRegex =
		/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
	let villeRegex = /(.*[A-Za-z]){5,30}/;
	let countryRegex = /(.*[A-Za-z]){5,30}/;

	useEffect(() => {
		axios
			.get(`${REACT_APP_API_URL}api/users`)
			.then(res => setClients(res.data))
			.catch(err => console.log(err));
	}, []);

	// SUPPRIMER CLIENT
	const handleDelete = (id, name) => {
		if (
			window.confirm(
				`Si vous cliquez sur ok Mr ${name} sera supprimer et vous ne pourrez pas revenir en arrière`,
			)
		) {
			axios.delete(`${REACT_APP_API_URL}api/users/` + id).then(() => {
				alert(`Le client à bien été supprimer`);
			});
			window.location.reload();
		} else {
			window.location.reload();
		}
	};

	// MODIFIER CLIENT
	const handleUpdate = id => {
		if (isActive.active) {
			setisActive({ id, active: false });
		} else {
			setisActive({ id, active: true });
		}
	};

	const ValidateHandle = (id, name) => {
		if (nom === "") {
			alert("Veuillez renseigner le nom");
		} else if (email === "") {
			alert("Veuillez renseigner un email");
		} else if (ville === "") {
			alert("Veuillez renseigner une ville");
		} else if (country === "") {
			alert("Veuillez renseigner un Pays");
		} else if (phone === "") {
			alert("Veuillez renseigner un Télèphone");
		} else {
			if (window.confirm(`Si vous cliquez sur ok Mr ${name} sera modifier`))
				axios
					.put(`${REACT_APP_API_URL}api/users/` + id, {
						name: nom,
						email,
						city: ville,
						country,
						phone,
					})
					.then(() => {
						alert(`Vous venez de modifier le client `);
						window.location.reload();
					})
					.catch(err => console.log(err));
		}
	};
	return (
		<div className="seeAllClients">
			<h1>Voir tous les clients</h1>
			<div className="spanss">
				<span className="spans" id="span1"></span>
				<span className="spans" id="span2"></span>
				<span className="spans" id="span3"></span>
				<span className="spans" id="span4"></span>
				<span className="spans" id="span5"></span>
			</div>
			<table>
				<thead>
					<tr>
						<th>Identifiant</th>

						<th>Nom</th>
						<th>E-mail</th>
						<th>City</th>
						<th>Country</th>
						<th>Phone</th>
						<th>Heure d'inscription</th>
					</tr>
				</thead>
				{clients && clients.length
					? clients.map((clients, index) => (
							<tbody key={index}>
								<tr>
									<td>{clients._id}</td>
									<td>{clients.name}</td>
									<td>{clients.email}</td>
									<td>{clients.city}</td>
									<td>{clients.country}</td>
									<td>{clients.phone}</td>
									<td>{clients.updatedAt}</td>
									<td className="lastChild-td">
										<button
											onClick={() => handleUpdate(clients._id)}
											className="stylo"
										>
											<i className="fas fa-edit " />
										</button>
										<button
											className="trash"
											onClick={() => handleDelete(clients._id, clients.name)}
										>
											<i className="fas fa-trash"></i>
										</button>
									</td>
								</tr>

								<tr
									className={`modal ${
										clients._id === isActive.id && isActive.active
											? "active"
											: ""
									}`}
								>
									<th>{clients._id}</th>
									<th>
										<i className="fas fa-user"></i>
										<input
											placeholder={`${clients.name}`}
											required
											type="name"
											name="name"
											id="name"
											onChange={e => {
												if (nomRegex.test(e.target.value)) {
													setNom(e.target.value);
													document.getElementById("span1").style.color =
														"green";
													document.getElementById("span1").innerHTML =
														"Prénom Valide";
												} else {
													document.getElementById("span1").style.fontWeight =
														"bold";
													document.getElementById("span1").style.color = "red";
													document.getElementById("span1").innerHTML =
														"Veuillez renseigner minimun 3 caractères";
												}
											}}
										></input>
										<span className="span1" id="span1"></span>
									</th>
									<th>
										<i className="fas fa-at"></i>
										<input
											placeholder={`${clients.email}`}
											required
											type="email"
											name="email"
											id="email"
											onChange={e => {
												if (mailRegex.test(e.target.value)) {
													setEmail(e.target.value);
													document.getElementById("span2").style.color =
														"green";
													document.getElementById("span2").innerHTML =
														"Email Valide";
												} else {
													document.getElementById("span2").style.fontWeight =
														"bold";
													document.getElementById("span2").style.color = "red";
													document.getElementById("span2").innerHTML =
														"Veuillez renseigner une adresse e-mail valide";
												}
											}}
										></input>
										{/* <span className="spans" id="span2"></span> */}
									</th>
									<th>
										<i className="fas fa-city"></i>
										<input
											placeholder={`${clients.city}`}
											required
											type="ville"
											name="ville"
											id="ville"
											onChange={e => {
												if (villeRegex.test(e.target.value)) {
													setVille(e.target.value);
													document.getElementById("span3").style.color =
														"green";
													document.getElementById("span3").innerHTML =
														"Ville Valide";
												} else {
													document.getElementById("span3").style.fontWeight =
														"bold";
													document.getElementById("span3").style.color = "red";
													document.getElementById("span3").innerHTML =
														"Veuillez renseigner une ville valide";
												}
											}}
										></input>
										{/* <span className="spans" id="span3"></span> */}
									</th>
									<th>
										<i className="fas fa-flag"></i>
										<input
											placeholder={`${clients.country}`}
											required
											type="country"
											name="country"
											id="country"
											onChange={e => {
												if (countryRegex.test(e.target.value)) {
													setCountry(e.target.value);
													document.getElementById("span4").style.color =
														"green";
													document.getElementById("span4").innerHTML =
														"Country Valide";
												} else {
													document.getElementById("span4").style.fontWeight =
														"bold";
													document.getElementById("span4").style.color = "red";
													document.getElementById("span4").innerHTML =
														"Veuillez renseigner un pays valide";
												}
											}}
										></input>
										{/* <span className="spans" id="span4"></span> */}
									</th>
									<th>
										<i className="fas fa-phone"></i>
										<input
											placeholder={`${clients.phone}`}
											required
											type="phone"
											name="phone"
											id="phone"
											onChange={e => {
												if (phoneRegex.test(e.target.value)) {
													setPhone(e.target.value);
													document.getElementById("span5").style.color =
														"green";
													document.getElementById("span5").innerHTML =
														"Phone Valide";
												} else {
													document.getElementById("span5").style.fontWeight =
														"bold";
													document.getElementById("span5").style.color = "red";
													document.getElementById("span5").innerHTML =
														"Veuillez renseigner un numero de Tel valide";
												}
											}}
										></input>
										{/* <span className="spans" id="span5"></span> */}
									</th>
									<th>
										<button
											onClick={() => ValidateHandle(clients._id, clients.name)}
										>
											<i className="fas fa-check add" />
										</button>
										<button
											onClick={() => handleUpdate(clients._id)}
											className="retour"
										>
											<i className="fas fa-edit " />
										</button>
									</th>
								</tr>
							</tbody>
					  ))
					: ""}
			</table>
		</div>
	);
};

export default SeeAllClients;
