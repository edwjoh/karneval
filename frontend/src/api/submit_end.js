import { base_url } from "./base_url";

async function submit_end(pos) {
    try {
        const res = await fetch(`${base_url}/api/submit_end`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pos),
        });

        return res.ok;
    } catch (error) {
        return false;
    }
}

export default submit_end;
