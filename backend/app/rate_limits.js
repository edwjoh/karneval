import { rateLimit } from "express-rate-limit";

export const get_limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minuter
	limit: 2,
	standardHeaders: true,
	legacyHeaders: false,
	ipv6Subnet: 56,
});

export const submit_limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minuter
	limit: 5,
	standardHeaders: true,
	legacyHeaders: false,
	ipv6Subnet: 56,
});
