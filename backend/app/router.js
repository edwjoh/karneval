import express from "express";
import get_end from "./funcs/get_end.js";
import submit_end from "./funcs/submit_end.js";

const router = express.Router();

router.get("/get_end", get_end);
router.post("/submit_end", submit_end);

export default router;
