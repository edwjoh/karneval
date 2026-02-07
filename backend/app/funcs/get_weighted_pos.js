import coords_distance from "./misc/distance.js";

function remove_outliers(coords) {
	if (coords.length < 3) return coords;

	const lats = coords.map((c) => c.lat).sort((a, b) => a - b);
	const longs = coords.map((c) => c.long).sort((a, b) => a - b);
	const median_lat = lats[Math.floor(lats.length / 2)];
	const median_long = longs[Math.floor(longs.length / 2)];

	const median_pos = { lat: median_lat, long: median_long };

	return coords.filter((coord) => {
		const dist = coords_distance(coord, median_pos);
		return dist < 200;
	});
}

function get_weighted_pos(coords) {
	if (coords.length == 0) return null;

	coords = remove_outliers(coords);
	if (coords.length == 0) return null;

	const now = Date.now();
	let weighted_lat = 0;
	let weighted_long = 0;
	let total_weight = 0;

	coords.forEach((coord) => {
		const age_minutes = (now - coord.date) / (1000 * 60);
		const weight = Math.exp(-age_minutes / 15);

		weighted_lat += coord.lat * weight;
		weighted_long += coord.long * weight;
		total_weight += weight;
	});
	console.log("asd");
	console.log(weighted_lat, weighted_long, total_weight);

	return {
		lat: weighted_lat / total_weight,
		long: weighted_long / total_weight,
	};
}

export default get_weighted_pos;
