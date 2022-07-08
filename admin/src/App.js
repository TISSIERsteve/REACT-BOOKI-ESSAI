import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Headers from "./components/Headers";

// Pages
import TableauBord from "./pages/TableauBord";
import NewClient from "./pages/NewClient";
import NewHotel from "./pages/NewHotel";
import SeeAllClients from "./pages/SeeAllClients";
import SeeAllHotels from "./pages/SeeAllHotels";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Headers></Headers>
				<main className="main">
					<Routes>
						<Route path="/" element={<TableauBord></TableauBord>}></Route>
						<Route path="/newClient" element={<NewClient></NewClient>}></Route>
						<Route
							path="/seeAllClients"
							element={<SeeAllClients></SeeAllClients>}
						></Route>
						<Route path="newHotel" element={<NewHotel></NewHotel>}></Route>
						<Route
							path="seeAllHotels"
							element={<SeeAllHotels></SeeAllHotels>}
						></Route>
						<Route path="*" element={<TableauBord></TableauBord>}></Route>
					</Routes>
				</main>
				<Footer></Footer>
			</div>
		</Router>
	);
};

export default App;
