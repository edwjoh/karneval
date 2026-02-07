function get_weighted_pos(coords) {
    const now = Date.now();
    let weighted_lat = 0;
    let weighted_long = 0;
    let total_weight = 0;

    coords.forEach((coord) => {
        const age_minutes = (now - coord.date) / (1000 * 60);
        const weight = Math.exp(-age_minutes / 20);

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
