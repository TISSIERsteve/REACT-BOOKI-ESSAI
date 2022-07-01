// import React, { useState } from "react";
// import axios from "axios";
// const { REACT_APP_API_URL } = process.env;

// const seeAllClientsItem = ({ clients }) => {
// 	// SUPPRIMER
// 	const handleDelete = id => {
// 		if (window.confirm("Voulez vous supprimer ce client")) {
// 			handleDeleteConfirm();
// 		} else {
// 			window.location.reload();
// 		}
// 	};
// 	const handleDeleteConfirm = id => {
// 		axios.delete(`${REACT_APP_API_URL}api/users/` + id).then(() => {
// 			alert(`Le client à bien été supprimer`);
// 		});
// 		window.location.reload();
// 	};

// 	// MODIFIER
// 	// Ouverture fenêtre
// 	const handleUpdate = id => {
// 		if (isActive === "active") {
// 			setisActive("");
// 		} else {
// 			setisActive("active");
// 		}
// 	};
// 	return (
// 		<tbody>
// 			<tr>
// 				<td>{clients._id}</td>
// 				<td>{clients.name}</td>
// 				<td>{clients.email}</td>
// 				<td>{clients.city}</td>
// 				<td>{clients.country}</td>
// 				<td>{clients.phone}</td>
// 				<td>{clients.updatedAt}</td>
// 				<td className="lastChild-td">
// 					<button onClick={() => handleUpdate(clients._id)} className="stylo">
// 						<i className="fas fa-edit " />
// 					</button>
// 					<button className="trash" onClick={() => handleDelete(clients._id)}>
// 						<i className="fas fa-trash"></i>
// 					</button>
// 				</td>
// 			</tr>
// 		</tbody>
// 	);
// };

// export default seeAllClientsItem;
