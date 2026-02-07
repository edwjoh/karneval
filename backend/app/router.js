import express from "express";
import get_end from "./funcs/get_end.js";
import submit_end from "./funcs/submit_end.js";
import { submit_limiter } from "./rate_limits.js";
import { stats_middleware } from "./funcs/stats_middleware.js";

const router = express.Router();

router.get("/get_end", stats_middleware("gets"), get_end);
router.post("/submit_end", stats_middleware("posts"), submit_limiter, submit_end);
export default router;
