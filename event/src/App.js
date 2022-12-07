import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
				</Routes>
				<Routes>
					<Route path="/portofolio" exact element={<Portofolio />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
