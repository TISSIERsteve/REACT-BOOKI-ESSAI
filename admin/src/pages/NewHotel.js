import React, { useState } from "react";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const NewHotel = () => {
	// const [postPicture, setPostPicture] = useState(null);
	const [files, setFiles] = useState("");
	console.log(files);
	const [hotel, setHotel] = useState("");
	const [ville, setVille] = useState("");
	const [adresse, setAdresse] = useState("");
	const [description, setDescription] = useState("");
	const [prix, setPrix] = useState("");

	// REGEX
	const testRegex = /(.*[a-z]){5,30}/;
	const prixRegex = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,9})?$/;
	const textareaRegex = /(.*[a-z]){5,30}/;

	// ENVOI IMAGE
	// const handlePicture = e => {
	// 	setPostPicture(e.target.files[0]);
	// };
	const addImg = e => {
		e.preventDefault();
		if (
			testRegex.test(hotel) &&
			testRegex.test(ville) &&
			prixRegex.test(prix) &&
			testRegex.test(adresse) &&
			textareaRegex.test(description)
		) {
			const formData = new FormData();
			formData.append("imageUrl", files);
			formData.append("name", hotel);
			formData.append("city", ville);
			formData.append("address", adresse);
			formData.append("description", description);
			formData.append("prix", prix);

			axios
				.post(`${REACT_APP_API_URL}api/hotels`, formData)
				.then(res => {
					console.log("envoyer");
				})
				.catch(err => console.log(err));
		} else {
			alert("Veuillez à remplir tous les champs correctement");
			return;
		}
	};
	// SUPPRIMER IMAGE
	const removeImg = () => {
		if (window.confirm("Voulez vous supprimer l'image")) {
			removeImgItem();
		}
	};
	const removeImgItem = () => {
		window.location.reload();
	};

	return (
		<div className="new-hotel">
			<div className="top">
				<h1>Ajouter un nouvel hôtel</h1>
			</div>

			<div className="right">
				<form>
					<div className="container-image">
						<div className="select-image">
							<label>Insérer une photo</label>
							<input
								required
								type="file"
								id="file"
								// multiple
								name="file"
								// onChange={e => handlePicture(e)}
								onChange={e => setFiles(e.target.files[0])}
							/>
						</div>
						<img
							className="image-hotel"
							// src={postPicture}
							// alt=""
							src={
								files
									? URL.createObjectURL(files)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
							alt=""
						/>
						<button onClick={removeImg}>Supprimer</button>
					</div>
					<ul className="container-descriptif">
						<li className="selectHotel">
							<label>Nom de l'hôtel</label>
							<input
								required
								type="text"
								placeholder="Ex: Le Palace"
								onChange={e => {
									if (testRegex.test(e.target.value)) {
										setHotel(e.target.value);

										document.getElementById("span1").style.color = "green";
										document.getElementById("span1").innerHTML = "Hôtel Valide";
									} else {
										document.getElementById("span1").style.fontWeight = "bold";
										document.getElementById("span1").style.color = "red";
										document.getElementById("span1").innerHTML =
											"Veuillez renseigner un hôtel valide";
									}
								}}
							/>
							<span id="span1"></span>
						</li>

						<li className="select-prix">
							<label>Prix</label>
							<input
								required
								type="text"
								placeholder="Ex: 250"
								onChange={e => {
									if (prixRegex.test(e.target.value)) {
										setPrix(e.target.value);
										document.getElementById("span2").style.color = "green";
										document.getElementById("span2").innerHTML = "Prix Valide";
									} else {
										document.getElementById("span2").style.fontWeight = "bold";
										document.getElementById("span2").style.color = "red";
										document.getElementById("span2").innerHTML =
											"Veuillez renseigner un prix valide";
									}
								}}
							/>
							<span id="span2"></span>
						</li>
						<li className="select-ville">
							<label>Ville</label>
							<input
								required
								type="text"
								placeholder="Ex: Cannes"
								onChange={e => {
									if (testRegex.test(e.target.value)) {
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
							<span id="span3"></span>
						</li>
						<li className="select-adress">
							<label>Adresse</label>
							<input
								required
								type="text"
								placeholder="Ex: 7 rue de la Motte "
								onChange={e => {
									if (testRegex.test(e.target.value)) {
										setAdresse(e.target.value);
										document.getElementById("span4").style.color = "green";
										document.getElementById("span4").innerHTML =
											"Adresse Valide";
									} else {
										document.getElementById("span4").style.fontWeight = "bold";
										document.getElementById("span4").style.color = "red";
										document.getElementById("span4").innerHTML =
											"Veuillez renseigner une adresse valide";
									}
								}}
							/>
							<span id="span4"></span>
						</li>
						<li className="select-description">
							<label>Description</label>
							<textarea
								cols="30"
								rows="4"
								required
								type="text"
								placeholder="Ex: Hôtel avec vue sur la mer"
								onChange={e => {
									if (textareaRegex.test(e.target.value)) {
										setDescription(e.target.value);
										document.getElementById("span5").style.color = "green";
										document.getElementById("span5").innerHTML =
											"Description Valide";
									} else {
										document.getElementById("span5").style.fontWeight = "bold";
										document.getElementById("span5").style.color = "red";
										document.getElementById("span5").innerHTML =
											"Veuillez renseigner une description valide";
									}
								}}
							/>
							<span id="span5"></span>
						</li>
						<button onClick={addImg} className="create">
							Créer
						</button>
						<br />
						<button type="reset">Annuler</button>
					</ul>
				</form>
			</div>
		</div>
	);
};

export default NewHotel;