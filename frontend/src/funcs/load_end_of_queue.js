import get_end from "../api/get_end";

export async function load_end_of_queue() {
    const data = await get_end();

    return data;
}
