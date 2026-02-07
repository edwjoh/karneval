function get_weighted_pos(coords) {
    const sorted = coords.sort((a, b) => new Date(a.date) - new Date(b.date));

    const weights = sorted.map((asd, i) => Math.pow(2, i));
    const total_weight = sum(weights);

    let weighted_lat = 0;
    let weighted_long = 0;

    sorted.forEach((coord, i) => {
        const normalized_weight = weights[i] / total_weight;
        weighted_lat += coord.lat * normalized_weight;
        weighted_long += coord.long * normalized_weight;
    });

    return {
        lat: weighted_lat,
        long: weighted_long,
    };
}

function sum(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }

    return sum;
}

export default get_weighted_pos;
