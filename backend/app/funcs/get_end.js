import get_weighted_pos from "./get_weighted_pos.js";
import { get_coords } from "./querys.js";

export function get_end(req, res) {
	try {
		const final_pos = get_final_pos();

		return res.status(200).send(final_pos);
	} catch (error) {
		console.log(error);
		return res.status(500).send("knas");
	}
}

export function get_final_pos() {
	try {
		const coords = get_coords();
		const final_pos = get_weighted_pos(coords);
		return final_pos;
	} catch (error) {
		return null;
	}
}
