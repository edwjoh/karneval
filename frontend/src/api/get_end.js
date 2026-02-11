import { base_url } from "../misc/base_url";

async function get_end() {
    try {
        const res = await fetch(`${base_url}/api/get_end`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) throw "knas";

        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default get_end;
