import axios from "axios";
import React, { useEffect, useState } from "react";

// Components
import ModalSeeAllHotels from "../components/ModalSeeAllHotels";

const { REACT_APP_API_URL } = process.env;

const SeeAllHotels = () => {
	const [hotels, setHotels] = useState("");
	const [isActive, setisActive] = useState({ id: null, active: false });
	const [isChambre, setisChambre] = useState({ id: null, active: false });
	const [isImage, setisImage] = useState({
		id: null,
		active: false,
	});
	const [file, setFile] = useState("");
	const [img, setImg] = useState("");
	const [hotel, setHotel] = useState("");
	const [ville, setVille] = useState("");
	const [adresse, setAdresse] = useState("");
	const [tarif, setTarif] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		axios
			.get(`${REACT_APP_API_URL}api/hotels`)
			.then(res => setHotels(res.data))
			.catch(err => console.log(err));
	}, []);

	// MODAL MODIF INFO
	const handleUpdate = id => {
		if (isActive.active) {
			setisActive({ id, active: false });
		} else {
			setisActive({ id, active: true });
		}
	};

	// SUPPRIMER
	const handleRemove = (id, name) => {
		if (
			window.confirm(
				`Si vous cliquez sur ok L'hôtel ${name} sera supprimer et vous ne pourrez pas revenir en arrière`,
			)
		) {
			axios
				.delete(`${REACT_APP_API_URL}api/hotels/` + id)
				.then(() => {
					alert(`L'hôtel ${name} à bien été supprimer`);
					window.location.reload();
				})
				.catch(err => console.log(err));
		} else {
			window.location.reload();
		}
	};

	// MODIFIER INFOS HOTELS
	const handleUpdateHotels = (id, name) => {
		if (hotel === "") {
			alert("Veuillez renseigner le nom de l'Hôtel");
		} else if (ville === "") {
			alert("Veuillez renseigner une Ville");
		} else if (adresse === "") {
			alert("Veuillez renseigner une Adresse");
		} else if (tarif === "") {
			alert("Veuillez renseigner un Tarif");
		} else if (description === "") {
			alert("Veuillez renseigner une Description");
		} else {
			if (
				window.confirm(`Si vous cliquez sur ok l'hôtel ${name} sera modifier`)
			)
				axios
					.put(`${REACT_APP_API_URL}api/hotels/` + id, {
						name: hotel,
						city: ville,
						address: adresse,
						description,
						prix: tarif,
					})
					.then(() => {
						alert(`Vous venez de modifier l'hôtel `);
						window.location.reload();
					})
					.catch(err => console.log(err));
		}
	};

	// MODIFIER IMAGE HOTEL

	// MODAL MODIF IMAGE
	const handleUpdateImageHotel = id => {
		if (isImage.active) {
			setisImage({ id, active: false });
		} else {
			setisImage({ id, active: true });
		}
	};

	const handlePicture = e => {
		setImg(URL.createObjectURL(e.target.files[0]));
		setFile(e.target.files);
	};
	const handleUpdateImageHotelValide = (id, name) => {
		Object.values(file).map(async file => {
			const formData = new FormData();
			formData.append("image", file);

			axios
				.put(`${REACT_APP_API_URL}api/hotels/image/` + id, formData)
				.then(res => {
					console.log("envoyer");
					window.location.reload();
				})
				.catch(err => console.log(err));
		});
	};

	const removeImg = () => {
		window.location.reload();
	};

	// AJOUT PHOTO CHAMBRE
	// const [title, setTitle] = useState("");
	// const [prix, setPrix] = useState("");
	// const [number, setNumber] = useState("");
	// const [descriptif, setDescriptif] = useState("");
	// const [numero, setNumero] = useState("");

	const addRooms = id => {
		console.log(id);
		if (isChambre.active) {
			setisChambre({ id, active: false });
		} else {
			setisChambre({ id, active: true });
		}
	};
	// const handleRooms = e => {
	// 	setImg(URL.createObjectURL(e.target.files[0]));
	// 	setFile(e.target.files);
	// };

	const handleAddRooms = (id, name) => {
		Object.values(file).map(async file => {
			const formData = new FormData();

			// formData.append("title", title);
			// formData.append("price", prix);
			// formData.append("maxPeople", number);
			// formData.append("description", descriptif);
			// formData.append("rooms", file);
			// formData.append("roomNumbers", numero);

			axios
				.post(
					`${REACT_APP_API_URL}
				api/rooms`,
					formData,
				)

				.then(res => {
					console.log("envoyer");
					// window.location.reload();
				})
				.catch(err => console.log(err));
		});
	};

	return (
		<div className="seeAllHotels">
			<div className="search">
				<label htmlFor=""></label>
				<input type="text" placeholder="Rechercher" />
			</div>
			<h1>Voir tous les hôtels</h1>
			{hotels && hotels.length ? (
				hotels.map((x, index) => (
					<ul className="details" key={index}>
						<div className="details-image">
							<img src={x.imageUrl} alt={x.name} title={x.name}></img>

							<button onClick={() => handleUpdateImageHotel(x._id)}>
								Modifier image
							</button>
						</div>
						<div className="details-info">
							<ul>
								<li>
									<h4>Identifiants: </h4>
									{x._id}
								</li>
								<li>
									<h4>Hôtel:</h4> {x.name}
								</li>
								<li>
									<h4>Ville:</h4> {x.city}
								</li>
								<li>
									<h4>Adresse:</h4> {x.address}
								</li>
								<li>
									<h4>Tarif:</h4> {x.prix} €
								</li>
								<li>
									<h4>Description:</h4>
									<div className="description">{x.description}</div>
								</li>
							</ul>

							{/* Modal ajout chambre */}
							{/* <div
								className={`modalChambre ${
									x._id === isChambre.id && isChambre.active ? "active" : ""
								}`}
							> */}

							{/* <li className="selectRooms"> */}
							{/* <label>Nom de l'hôtel</label>
									<input
										required
										type="text"
										placeholder="Ex: Chambre avec balcon"
										onChange={e => {
											setTitle(e.target.value);
										}}
									/>
									<label>Prix</label>
									<input
										required
										type="text"
										placeholder="Ex: Prix de la chambre"
										onChange={e => {
											setPrix(e.target.value);
										}}
									/>
									<label>MaxPeople</label>
									<input
										required
										type="text"
										placeholder="Ex: Maximun de personnes"
										onChange={e => {
											setNumber(e.target.value);
										}}
									/>
									<label>Description</label>
									<input
										required
										type="text"
										placeholder="Ex: Description de la chambre"
										onChange={e => {
											setDescriptif(e.target.value);
										}}
									/>
									<label>Numéro</label>
									<input
										required
										type="text"
										placeholder="Ex: Numéro de la chambre"
										onChange={e => {
											setNumero(e.target.value);
										}}
									/> */}
							{/* </li> */}

							{/* <ul>
									<li>
										<input type="file" onChange={e => handleRooms(e)} />
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
										{img ? (
											<button className="remove-Img" onClick={removeImg}>
												<i className="fas fa-trash" />
											</button>
										) : (
											""
										)}
									</li>
									<button
										className="valide-Rooms"
										onClick={() => handleAddRooms(x._id, x.name)}
									>
										<i className="fas fa-check add" />
									</button>
								</ul> */}
							{/* </div> */}

							{/* Modal modif image */}
							<div
								className={`modalImage ${
									x._id === isImage.id && isImage.active ? "active" : ""
								}`}
							>
								<ul>
									<li>
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
										{img ? (
											<button className="remove-Img" onClick={removeImg}>
												<i className="fas fa-trash" />
											</button>
										) : (
											""
										)}
									</li>
									<button
										className="valide-Img"
										onClick={() => handleUpdateImageHotelValide(x._id, x.name)}
									>
										<i className="fas fa-check add" />
									</button>
								</ul>
							</div>

							{/* Modal modif info */}
							<div
								className={`modalInfo ${
									x._id === isActive.id && isActive.active ? "active" : ""
								}`}
							>
								<div>
									{" "}
									<ul>
										<li>
											<label>Hôtel:</label>
											<input
												placeholder={x.name}
												required
												onChange={e => setHotel(e.target.value)}
											></input>
										</li>
										<li>
											<label>Ville:</label>
											<input
												placeholder={x.city}
												required
												onChange={e => setVille(e.target.value)}
											></input>
										</li>
										<li>
											<label>Adresse:</label>
											<input
												placeholder={x.address}
												required
												onChange={e => setAdresse(e.target.value)}
											></input>
										</li>
										<li>
											<label>Tarif:</label>
											<input
												placeholder={x.prix}
												required
												onChange={e => setTarif(e.target.value)}
											></input>
										</li>
										<li className="description">
											<label>Description:</label>
											<div>
												<input
													placeholder={x.description}
													required
													onChange={e => setDescription(e.target.value)}
												></input>
											</div>
										</li>
										<button onClick={() => handleUpdateHotels(x._id, x.name)}>
											<i className="fas fa-check add" />
										</button>
									</ul>
								</div>
							</div>
							<div className="button">
								<button
									className="button-add-rooms"
									onClick={() => addRooms(x._id, x.name)}
								>
									<i className="fas fa-plus"></i>
								</button>
								<button
									className="button-update"
									onClick={() => handleUpdate(x._id, x.name)}
								>
									<i className="fas fa-edit " />
								</button>
								<button
									className="button-remove"
									onClick={() => handleRemove(x._id, x.name)}
								>
									<i className="fas fa-trash" />
								</button>
							</div>
						</div>
					</ul>
				))
			) : (
				<h2>Loading ...</h2>
			)}
		</div>
	);
};

export default SeeAllHotels;
