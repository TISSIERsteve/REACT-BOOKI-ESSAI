import React from "react";

// Components
import TableauBordGaucheItem from "../components/TableauBordGaucheItem";

const TableauBord = () => {
	return (
		<div className="container">
			{/* Partie Gauche */}
			<TableauBordGaucheItem></TableauBordGaucheItem>

			{/* Partie Droite */}
			<div className="container-droit">
				<h2>Partie droite</h2>
			</div>
		</div>
	);
};

export default TableauBord;
<h1>Tableau de bord</h1>;
