import db from "../db.js";

export function insert_coords(lat, long) {
    try {
        if (!lat || !long) return false;

        const q = db.prepare("INSERT INTO coords (id, lat, long, date) VALUES (?, ?, ?, ?)");
        q.run(crypto.randomUUID(), lat, long, new Date().getTime());

        return true;
    } catch (error) {
        return false;
    }
}

export function get_coords() {
    try {
        const q = db.prepare("SELECT * FROM coords ORDER BY date DESC LIMIT 4");

        const coords = q.all();

        return coords;
    } catch (error) {
        return [];
    }
}
