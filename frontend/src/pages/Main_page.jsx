import { useEffect, useState } from "react";

import submit_end from "../api/submit_end";
import get_end from "../api/get_end";
import Map_box from "../components/Map_box";
import Loader from "../components/Loader";
import Check_icon from "../icons/Check_icon";
import X_icon from "../icons/X_icon";

function Main_page() {
    const default_text = "Dela position";

    const [submit_content, set_submit_content] = useState(default_text);

    const [user_position, set_user_position] = useState({
        lat: 55.7029,
        long: 13.1947,
    });

    const [end_position, set_end_position] = useState({
        lat: 55.7029,
        long: 13.1947,
    });

    async function load_end_position() {
        const data = await get_end();

        if (!data) return;

        set_end_position(data);
    }

    async function post_position() {
        set_submit_content(<Loader />);

        const res = await submit_end(user_position);

        const message = res ? <Check_icon /> : <X_icon />;

        setTimeout(() => {
            set_submit_content(message);
            setTimeout(() => set_submit_content(default_text), 2000);
        }, 1000);
    }

    function position_setter() {
        navigator.geolocation.getCurrentPosition((pos) => {
            set_user_position({ lat: pos.coords.latitude, long: pos.coords.longitude });
        });
    }

    useEffect(() => {
        position_setter();
        const interval_id = setInterval(() => {
            position_setter();
        }, 5000);

        return () => clearInterval(interval_id);
    }, []);

    useEffect(() => {
        load_end_position();
        const interval_id = setInterval(() => {
            load_end_position();
        }, 120000);

        return () => clearInterval(interval_id);
    }, []);

    return (
        <div className="flex flex-col gap-4 p-4 h-full">
            <div className="w-full h-full rounded">
                <Map_box user_position={user_position} end_position={end_position} />
            </div>

            <button
                disabled={submit_content != default_text}
                onClick={() => post_position()}
                className="p-4 rounded w-full bg-red-400 flex items-center justify-center"
            >
                {submit_content}
            </button>
        </div>
    );
}

export default Main_page;
