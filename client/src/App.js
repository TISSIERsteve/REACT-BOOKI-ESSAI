import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./pages/Footer";
import Inscription from "./pages/Inscription";
import Main from "./pages/Main";
import Navigation from "./pages/Navigation";

function App() {
	return (
		<Router>
			<div className="App">
				<header className="header">
					<Navigation></Navigation>
				</header>
				<Routes>
					<Route path="/" element={<Main></Main>}></Route>

					<Route path="*" element={<Main></Main>}></Route>
				</Routes>

				<footer className="footer">
					<Footer></Footer>
				</footer>
			</div>
		</Router>
	);
}

export default App;
