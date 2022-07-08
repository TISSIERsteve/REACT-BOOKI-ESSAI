import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import HotelItem from "../components/HotelItem";

const Hotel = () => {
	const { id } = useParams();
	const [hotel, setHotel] = useState("");

	useEffect(() => {
		axios
			.get(`http://localhost:3001/api/hotels/` + id)
			.then(res => {
				setHotel(res.data);
			})
			.catch(err => alert("Une erreur s'est produite"));
	}, [id]);

	return (
		<div>
			<HotelItem hotel={hotel}></HotelItem>
		</div>
	);
};

export default Hotel;
