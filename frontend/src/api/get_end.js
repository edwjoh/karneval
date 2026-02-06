async function get_end() {
    try {
        const res = await fetch("", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default get_end;
