import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_page from "./pages/Main_page";
import Notfound_page from "./pages/Notfound_page";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main_page />} />
				<Route path="*" element={<Notfound_page />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
