import { insert_coords } from "./querys.js";

export default function submit_end(req, res) {
	try {
		if (!req.body) throw "no body";
		const { lat, long } = req.body;
		if (!lat || !long) throw "input";

		insert_coords(lat, long);

		return res.status(200).send("correct!");
	} catch (error) {
		console.log(error);
		return res.status(500).send("knas");
	}
}
