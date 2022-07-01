import React from "react";
import { Link } from "react-router-dom";

// Components
import Search from "./Search";
import Items from "./Items";

const Headers = () => {
	return (
		<div className="header">
			<div className="admin">
				<Link to="/">Administrateur</Link>
			</div>
			<>
				<Search></Search>
			</>
			<>
				<Items></Items>
			</>
		</div>
	);
};

export default Headers;
