// Scenario 1: Mostly clustered, one outlier at the end
const scenario1 = [
    { id: "1-1", lat: 55.7047, long: 13.191, date: 1738881600000 },
    { id: "1-2", lat: 55.70471, long: 13.19102, date: 1738881660000 },
    { id: "1-3", lat: 55.70469, long: 13.19098, date: 1738881720000 },
    { id: "1-4", lat: 55.70472, long: 13.19101, date: 1738881780000 },
    { id: "1-5", lat: 55.70468, long: 13.19099, date: 1738881840000 },
    { id: "1-6", lat: 55.7047, long: 13.19103, date: 1738881900000 },
    { id: "1-7", lat: 55.70471, long: 13.19097, date: 1738881960000 },
    { id: "1-8", lat: 55.70469, long: 13.19102, date: 1738882020000 },
    { id: "1-9", lat: 55.7047, long: 13.191, date: 1738882080000 },
    { id: "1-10", lat: 55.7056, long: 13.191, date: 1738882140000 }, // ~100m north
];

// Scenario 2: Two clusters - first 5 close together, last 5 close together but far from first group
const scenario2 = [
    { id: "2-1", lat: 55.7047, long: 13.191, date: 1738881600000 },
    { id: "2-2", lat: 55.70472, long: 13.19098, date: 1738881660000 },
    { id: "2-3", lat: 55.70469, long: 13.19102, date: 1738881720000 },
    { id: "2-4", lat: 55.70471, long: 13.19101, date: 1738881780000 },
    { id: "2-5", lat: 55.70468, long: 13.19099, date: 1738881840000 },
    { id: "2-6", lat: 55.7056, long: 13.192, date: 1738881900000 }, // Jump ~100m
    { id: "2-7", lat: 55.70562, long: 13.19198, date: 1738881960000 },
    { id: "2-8", lat: 55.70559, long: 13.19202, date: 1738882020000 },
    { id: "2-9", lat: 55.70561, long: 13.19201, date: 1738882080000 },
    { id: "2-10", lat: 55.70558, long: 13.19199, date: 1738882140000 },
];

// Scenario 3: Gradual movement (simulating queue moving forward)
const scenario3 = [
    { id: "3-1", lat: 55.7047, long: 13.191, date: 1738881600000 },
    { id: "3-2", lat: 55.70475, long: 13.191, date: 1738881660000 },
    { id: "3-3", lat: 55.7048, long: 13.191, date: 1738881720000 },
    { id: "3-4", lat: 55.70485, long: 13.191, date: 1738881780000 },
    { id: "3-5", lat: 55.7049, long: 13.191, date: 1738881840000 },
    { id: "3-6", lat: 55.70495, long: 13.191, date: 1738881900000 },
    { id: "3-7", lat: 55.705, long: 13.191, date: 1738881960000 },
    { id: "3-8", lat: 55.70505, long: 13.191, date: 1738882020000 },
    { id: "3-9", lat: 55.7051, long: 13.191, date: 1738882080000 },
    { id: "3-10", lat: 55.7056, long: 13.191, date: 1738882140000 }, // Bigger jump at end
];

// Scenario 4: All very close (GPS jitter while stationary)
const scenario4 = [
    { id: "4-1", lat: 55.7047, long: 13.191, date: 1738881600000 },
    { id: "4-2", lat: 55.7047, long: 13.19101, date: 1738881660000 },
    { id: "4-3", lat: 55.70471, long: 13.19099, date: 1738881720000 },
    { id: "4-4", lat: 55.70469, long: 13.191, date: 1738881780000 },
    { id: "4-5", lat: 55.7047, long: 13.19102, date: 1738881840000 },
    { id: "4-6", lat: 55.70472, long: 13.19101, date: 1738881900000 },
    { id: "4-7", lat: 55.70471, long: 13.19098, date: 1738881960000 },
    { id: "4-8", lat: 55.70469, long: 13.19101, date: 1738882020000 },
    { id: "4-9", lat: 55.7047, long: 13.19099, date: 1738882080000 },
    { id: "4-10", lat: 55.70471, long: 13.191, date: 1738882140000 },
];

// Scenario 5: Random outliers scattered throughout
const scenario5 = [
    { id: "5-1", lat: 55.7047, long: 13.191, date: 1738881600000 },
    { id: "5-2", lat: 55.70471, long: 13.19102, date: 1738881660000 },
    { id: "5-3", lat: 55.7056, long: 13.191, date: 1738881720000 }, // Outlier
    { id: "5-4", lat: 55.70469, long: 13.19098, date: 1738881780000 },
    { id: "5-5", lat: 55.7047, long: 13.19101, date: 1738881840000 },
    { id: "5-6", lat: 55.70472, long: 13.19099, date: 1738881900000 },
    { id: "5-7", lat: 55.70468, long: 13.192, date: 1738881960000 }, // Outlier
    { id: "5-8", lat: 55.70471, long: 13.191, date: 1738882020000 },
    { id: "5-9", lat: 55.70469, long: 13.19102, date: 1738882080000 },
    { id: "5-10", lat: 55.7047, long: 13.19098, date: 1738882140000 },
];

export { scenario1, scenario2, scenario3, scenario4, scenario5 };

// Scenario 1: Mostly clustered, one outlier at the end
// Target: The outlier at the end (actual queue end position)
const scenario1Target = { id: "1-10", lat: 55.7056, long: 13.191, date: 1738882140000 };

// Scenario 2: Two clusters
// Target: Last point in the second cluster (most recent queue position)
const scenario2Target = { id: "2-10", lat: 55.70558, long: 13.19199, date: 1738882140000 };

// Scenario 3: Gradual movement
// Target: The final position after the big jump (current queue end)
const scenario3Target = { id: "3-10", lat: 55.7056, long: 13.191, date: 1738882140000 };

// Scenario 4: All very close (GPS jitter)
// Target: Centroid/average of all points (true stationary position)
const scenario4Target = {
    id: "centroid",
    lat: 55.7047,
    long: 13.191,
    date: 1738882140000,
};

// Scenario 5: Random outliers scattered
// Target: One of the main cluster points (filtering out noise)
const scenario5Target = { id: "5-4", lat: 55.70469, long: 13.19098, date: 1738881780000 };

export { scenario1Target, scenario2Target, scenario3Target, scenario4Target, scenario5Target };
