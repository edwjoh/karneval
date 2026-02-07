import express from "express";
import router from "./router.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { app_limiter } from "./rate_limits.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());

app.use("/api", app_limiter, router);

const dist_path = path.join(__dirname, "../../frontend/dist");
app.use(express.static(dist_path));

app.get("*", (req, res) => {
	res.sendFile(path.join(dist_path, "index.html"));
});

const PORT = 3029;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
