import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const NewClient = () => {
	// HOOK
	const navigate = useNavigate();
	const [nom, setNom] = useState("");
	const [email, setEmail] = useState("");
	const [ville, setVille] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");

	// TEST REGEX
	const nomRegex = /(.*[A-Za-z]){3,30}/;
	let mailRegex =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
	let phoneRegex =
		/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
	let villeRegex = /(.*[A-Za-z]){5,30}/;
	let countryRegex = /(.*[A-Za-z]){5,30}/;

	// FONCTION SUBMIT FORMULAIRE
	const handleSubmit = e => {
		e.preventDefault();

		const passwordConfirm = document.getElementById("span7");
		const emailErrors = document.getElementById("span6");
		const passwordError = document.getElementById("span3");

		passwordConfirm.innerHTML = "";

		if (password !== rePassword) {
			passwordConfirm.innerHTML = "Les mots de passe ne correspondent pas";
			passwordConfirm.style.color = "red";
			passwordConfirm.style.fontWeight = "bold";
		} else if (
			password === rePassword &&
			nomRegex.test(nom) &&
			mailRegex.test(email) &&
			villeRegex.test(ville) &&
			phoneRegex.test(phone) &&
			countryRegex.test(country) &&
			passwordRegex.test(password)
		) {
			axios
				.post(`${REACT_APP_API_URL}api/auth/signup`, {
					nom,
					email,
					ville,
					country,
					phone,
					password,
				})
				.then(res => {
					if (res.data.errors) {
						emailErrors.innerHTML = res.data.errors.email;
						passwordError.innerHTML = res.data.errors.password;
					} else {
						if (window.confirm(`Voulez vous vous vraiment inscrire ${nom} `)) {
							alert(` ${nom} est bien inscrit`);
							navigate("/", { replace: true });
						} else {
							window.location.reload();
						}
					}
				})
				.catch(err => {
					console.log(err.response);
					try {
						if (err.response.data.error.errors.name.value === nom);
						alert("Ce nom est déjà utiliser");
					} catch {
						if (err.response.data.error.errors.email.value === email) {
							alert("Cette adresse email est déjà utiliser");
						}
					}
				});
		} else {
			console.log("erreur");
		}
	};
	return (
		<div className="newClient">
			<form onSubmit={handleSubmit}>
				<ul className="form-container">
					<li>
						<h2>Inscription</h2>
					</li>
					<li>
						<label htmlFor="name">Nom</label>
						<input
							required
							type="name"
							name="name"
							id="name"
							onChange={e => {
								if (nomRegex.test(e.target.value)) {
									setNom(e.target.value);
									document.getElementById("span1").style.color = "green";
									document.getElementById("span1").innerHTML = "Prénom Valide";
								} else {
									document.getElementById("span1").style.fontWeight = "bold";
									document.getElementById("span1").style.color = "red";
									document.getElementById("span1").innerHTML =
										"Veuillez renseigner minimun 3 caractères";
								}
							}}
						/>
						<span id="span1" />
					</li>
					<li>
						<label htmlFor="email">Email</label>
						<input
							required
							type="email"
							name="email"
							id="email"
							onChange={e => {
								if (mailRegex.test(e.target.value)) {
									setEmail(e.target.value);
									document.getElementById("span2").style.color = "green";
									document.getElementById("span2").innerHTML = "Email Valide";
								} else {
									document.getElementById("span2").style.fontWeight = "bold";
									document.getElementById("span2").style.color = "red";
									document.getElementById("span2").innerHTML =
										"Veuillez renseigner une adresse e-mail valide";
								}
							}}
						/>
						<span id="span2" />
					</li>
					<li>
						<label htmlFor="ville">Ville</label>
						<input
							required
							type="text"
							name="ville"
							id="ville"
							onChange={e => {
								if (villeRegex.test(e.target.value)) {
									setVille(e.target.value);
									document.getElementById("span3").style.color = "green";
									document.getElementById("span3").innerHTML = "Ville Valide";
								} else {
									document.getElementById("span3").style.fontWeight = "bold";
									document.getElementById("span3").style.color = "red";
									document.getElementById("span3").innerHTML =
										"Veuillez renseigner une ville valide";
								}
							}}
						/>
						<span id="span3" />
					</li>
					<li>
						<label htmlFor="phone">Phone</label>
						<input
							required
							type="tel"
							name="phone"
							id="phone"
							onChange={e => {
								if (phoneRegex.test(e.target.value)) {
									setPhone(e.target.value);
									document.getElementById("span4").style.color = "green";
									document.getElementById("span4").innerHTML = "Phone Valide";
								} else {
									document.getElementById("span4").style.fontWeight = "bold";
									document.getElementById("span4").style.color = "red";
									document.getElementById("span4").innerHTML =
										"Veuillez renseigner un numero de Phone valide";
								}
							}}
						/>
						<span id="span4" />
					</li>
					<li>
						<label htmlFor="country">Country</label>
						<input
							required
							type="text"
							name="country"
							id="country"
							onChange={e => {
								if (countryRegex.test(e.target.value)) {
									setCountry(e.target.value);
									document.getElementById("span5").style.color = "green";
									document.getElementById("span5").innerHTML = "Country Valide";
								} else {
									document.getElementById("span5").style.fontWeight = "bold";
									document.getElementById("span5").style.color = "red";
									document.getElementById("span5").innerHTML =
										"Veuillez renseigner une adresse Country valide";
								}
							}}
						/>
						<span id="span5" />
					</li>
					<li className="password">
						<label htmlFor="password">Mot de passe</label>
						<input
							required
							type="password"
							// type={password ? "password" : "text"}
							id="password"
							name="password"
							onChange={e => {
								if (passwordRegex.test(e.target.value)) {
									setPassword(e.target.value);
									document.getElementById("span6").style.color = "green";
									document.getElementById("span6").innerHTML =
										"Mot de passe valide";
								} else {
									document.getElementById("span6").style.fontWeight = "bold";
									document.getElementById("span6").style.color = "red";
									document.getElementById("span6").innerHTML =
										"Veuillez renseigner au moins une majuscule et minuscule avec 1 lettre";
								}
							}}
						/>
						{/* <button className="eyes" onClick={() => setPassword(password)}>
						{password ? <FaRegEyeSlash /> : <FaEye />}
					</button> */}

						<span id="span6" />
					</li>
					<li>
						<label htmlFor="rePassword">Confirmez mot de passe</label>
						<input
							required
							type="password"
							id="rePassword"
							name="rePassword"
							onChange={e => setRePassword(e.target.value)}
						/>
						<span id="span7" />
					</li>

					<br />
					<div>
						<button type="submit">Valider</button>
						<button type="reset">Annuler</button>
					</div>
				</ul>
			</form>
		</div>
	);
};

export default NewClient;
