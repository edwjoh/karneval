import get_weighted_pos from "./get_weighted_pos.js";
import { get_coords } from "./querys.js";

export default function get_end(req, res) {
	try {
		const coords = get_coords();

		const final_pos = get_weighted_pos(coords);

		return res.status(200).send(final_pos);
	} catch (error) {
		console.log(error);
		return res.status(500).send("knas");
	}
}
