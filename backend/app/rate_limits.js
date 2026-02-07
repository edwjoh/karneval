import { rateLimit } from "express-rate-limit";

export const app_limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minuter
	limit: 100,
	standardHeaders: true,
	legacyHeaders: false,
	ipv6Subnet: 56,
});

export const submit_limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minuter
	limit: 3,
	standardHeaders: true,
	legacyHeaders: false,
	ipv6Subnet: 56,
});
