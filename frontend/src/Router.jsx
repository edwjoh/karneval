import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main_page from "./Main_page";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main_page />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
