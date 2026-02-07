import { base_url } from "./base_url.js";

async function get_end() {
	try {
		const res = await fetch(`${base_url}/api/get_end`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log(res);

		if (!res.ok) throw "knas";

		return res.json();
	} catch (error) {
		console.log(error);
		return null;
	}
}

export default get_end;
