import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function data_middleware(req, res, next) {
	const ip = req.ip;
	const method = req.method;
	const entry = `${ip} ${method}\n`;
	const file_path = path.join(__dirname, "data.txt");

	fs.appendFile(file_path, entry, (err) => {
		if (err) console.log(err);
	});

	next();
}
