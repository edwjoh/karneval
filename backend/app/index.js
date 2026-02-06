import express from "express";
import router from "./router.js";
import cors from "cors";
import { app_limiter } from "./rate_limits.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", app_limiter, router);

app.listen(3029, () => console.log("app is running"));
