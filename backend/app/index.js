import express from "express";
import router from "./router";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(3029, () => console.log("app is running"));
