import { get_final_pos } from "../get_end.js";
import coords_distance from "../misc/distance.js";

export default function input_validation_middleware(req, res, next) {
    const MAX_DIST = 150;

    try {
        const { lat, long } = req.body;

        const final_pos = get_final_pos();

        const distance = coords_distance({ lat: lat, long: long }, final_pos);

        if (distance > MAX_DIST) {
            return res.status(400).send("too far!");
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send("knas");
    }
}
