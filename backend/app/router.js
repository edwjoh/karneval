import express from "express";
import { get_end } from "./funcs/get_end.js";
import submit_end from "./funcs/submit_end.js";
import { get_limiter, submit_limiter } from "./rate_limits.js";
import input_validation_middleware from "./funcs/middlewares/input_validation_middleware.js";
import data_middleware from "./funcs/middlewares/data_middleware.js";

const router = express.Router();

router.get("/get_end", get_limiter, data_middleware, get_end);
router.post("/submit_end", submit_limiter, input_validation_middleware, data_middleware, submit_end);
export default router;
