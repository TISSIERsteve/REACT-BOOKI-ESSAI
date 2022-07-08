import React, { useState } from "react";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

const NewHotel = () => {
	const [img, setImg] = useState();
	const [file, setFile] = useState("");
	const [hotel, setHotel] = useState("");
	const [ville, setVille] = useState("");
	const [adresse, setAdresse] = useState("");
	const [description, setDescription] = useState("");
	const [prix, setPrix] = useState("");
	const [imgRoom, setImgRoom] = useState();
	const [title, setTitle] = useState("");
	const [prixRoom, setPrixRoom] = useState("");
	const [number, setNumber] = useState("");
	const [descriptif, setDescriptif] = useState("");
	const [numero, setNumero] = useState("");
	const [rooms, setRooms] = useState([]);

	// REGEX
	const testRegex = /(.*[a-z]){5,30}/;
	const prixRegex = /^([1-9][0-9]{,2}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,9})?$/;
	const textareaRegex = /(.*[a-z]){5,30}/;

	// AJOUT PHOTO CHAMBRE APS FINI
	const handleRooms = e => {
		setImgRoom(URL.createObjectURL(e.target.files[0]));
		setRooms(e.target.files);
	};

	// ENVOI IMAGE HOTEL
	const handlePicture = e => {
		setImg(URL.createObjectURL(e.target.files[0]));
		setFile(e.target.files);
	};

	const handleAddImg = () => {
		if (window.confirm(`Voulez vous ajouter l'hôtel ${hotel}`)) {
			handleAddImgConfirm();
		}
	};

	const handleAddImgConfirm = () => {
		if (
			testRegex.test(hotel) &&
			testRegex.test(ville) &&
			prixRegex.test(prix) &&
			testRegex.test(adresse) &&
			textareaRegex.test(description)
		) {
			Object.values(file).map(async file => {
				const formData = new FormData();
				formData.append("name", hotel);
				formData.append("city", ville);
				formData.append("address", adresse);
				formData.append("image", file);
				formData.append("description", description);
				formData.append("prix", prix);

				// formData.append("rooms", rooms); //pas sur

				axios
					.post(`${REACT_APP_API_URL}api/hotels`, formData)

					.then(res => {
						console.log("envoyer");
						window.location.reload();
					})
					.catch(err => console.log(err));
			});
		} else {
			alert("Veuillez à remplir tous les champs correctement");
			return;
		}
	};

	// SUPPRIMER IMAGE HOTEL
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
			<div className="button-handle">
				<button onClick={() => handleAddImg()} className="create">
					Créer
				</button>
				<button type="reset">Annuler</button>
			</div>

			<div>
				{/* <form onSubmit={handleAddImg}> */}
				<form>
					{/* Partie hôtel */}
					<div className="partieImage">
						<div className="container-image-hotel">
							<div className="select-image">
								<label htmlFor="file">Insérer une photo de l'hôtel</label>
								<input type="file" onChange={e => handlePicture(e)} />
								{
									<img
										src={
											img
												? img
												: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
										}
										alt=""
									/>
								}
								{img ? <button onClick={removeImg}>Supprimer</button> : ""}
							</div>
						</div>
						<ul className="container-descriptif-hotel">
							<li>
								<label htmlFor="hotel">Nom de l'hôtel</label>
								<input
									id="hotel"
									required
									type="text"
									placeholder="Ex: Le Palace"
									onChange={e => {
										if (testRegex.test(e.target.value)) {
											setHotel(e.target.value);

											document.getElementById("span1").style.color = "green";
											document.getElementById("span1").innerHTML =
												"Hôtel Valide";
										} else {
											document.getElementById("span1").style.fontWeight =
												"bold";
											document.getElementById("span1").style.color = "red";
											document.getElementById("span1").innerHTML =
												"Veuillez renseigner un hôtel valide";
										}
									}}
								/>
								<span id="span1"></span>
							</li>

							<li>
								<label htmlFor="prix">Prix</label>
								<input
									id="prix"
									required
									type="text"
									placeholder="Ex: 250"
									onChange={e => {
										if (prixRegex.test(e.target.value)) {
											setPrix(e.target.value);
											document.getElementById("span2").style.color = "green";
											document.getElementById("span2").innerHTML =
												"Prix Valide";
										} else {
											document.getElementById("span2").style.fontWeight =
												"bold";
											document.getElementById("span2").style.color = "red";
											document.getElementById("span2").innerHTML =
												"Veuillez renseigner un prix valide";
										}
									}}
								/>
								<span id="span2"></span>
							</li>
							<li>
								<label htmlFor="ville">Ville</label>
								<input
									id="ville"
									required
									type="text"
									placeholder="Ex: Cannes"
									onChange={e => {
										if (testRegex.test(e.target.value)) {
											setVille(e.target.value);
											document.getElementById("span3").style.color = "green";
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
								/>
								<span id="span3"></span>
							</li>
							<li>
								<label htmlFor="adresse">Adresse</label>
								<input
									id="adresse"
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
											document.getElementById("span4").style.fontWeight =
												"bold";
											document.getElementById("span4").style.color = "red";
											document.getElementById("span4").innerHTML =
												"Veuillez renseigner une adresse valide";
										}
									}}
								/>
								<span id="span4"></span>
							</li>
							<li>
								<label htmlFor="description">Description</label>
								<textarea
									id="description"
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
											document.getElementById("span5").style.fontWeight =
												"bold";
											document.getElementById("span5").style.color = "red";
											document.getElementById("span5").innerHTML =
												"Veuillez renseigner une description valide";
										}
									}}
								/>
								<span id="span5"></span>
							</li>
						</ul>
					</div>
					<div className="partieInfo">
						{/* Partie chambre */}
						<div className="container-image-chambre">
							<div className="select-image">
								<label htmlFor="file">Insérer une photo de la chambre</label>
								<input type="file" onChange={e => handleRooms(e)} />

								{
									<img
										src={
											imgRoom
												? imgRoom
												: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
										}
										alt=""
									/>
								}
								{img ? <button onClick={removeImg}>Supprimer</button> : ""}
							</div>
						</div>

						<ul className="container-descriptif-room">
							<li>
								<label>Nom de l'hôtel</label>
								<input
									required
									type="text"
									placeholder="Ex: Chambre avec balcon"
									onChange={e => {
										setTitle(e.target.value);
									}}
								/>
							</li>
							<li>
								<label>Prix</label>
								<input
									required
									type="text"
									placeholder="Ex: Prix de la chambre"
									onChange={e => {
										setPrixRoom(e.target.value);
									}}
								/>
							</li>
							<li>
								<label>MaxPeople</label>
								<input
									required
									type="text"
									placeholder="Ex: Maximun de personnes"
									onChange={e => {
										setNumber(e.target.value);
									}}
								/>
							</li>
							<li>
								<label>Description</label>
								<input
									required
									type="text"
									placeholder="Ex: Description de la chambre"
									onChange={e => {
										setDescriptif(e.target.value);
									}}
								/>
							</li>
							<li>
								<label>Numéro</label>
								<input
									required
									type="text"
									placeholder="Ex: Numéro de la chambre"
									onChange={e => {
										setNumero(e.target.value);
									}}
								/>
							</li>
						</ul>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewHotel;
