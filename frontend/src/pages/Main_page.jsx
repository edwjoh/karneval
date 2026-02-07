import { useEffect, useState } from "react";

import submit_end from "../api/submit_end";
import Map_box from "../components/Map_box";
import Loader from "../components/Loader";
import Check_icon from "../icons/Check_icon";
import X_icon from "../icons/X_icon";

function Main_page() {
    const [submit_content, set_submit_content] = useState("Dela position");

    const [position, set_position] = useState({
        lat: 55.7029,
        long: 13.1947,
    });

    const [end_position, set_end_position] = useState({
        lat: 55.7029,
        long: 13.1947,
    });

    async function get_end_position() {
        const data = await get_end();

        return data;
    }

    async function post_position() {
        set_submit_content(<Loader />);
        const res = await submit_end(position);

        const message = res ? <Check_icon /> : <X_icon />;

        setTimeout(() => {
            set_submit_content(message);
            setTimeout(() => set_submit_content("Dela position"), 2000);
        }, 1000);
    }

    function position_setter() {
        navigator.geolocation.getCurrentPosition((pos) => {
            set_position({ lat: pos.coords.latitude, long: pos.coords.longitude });
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
        set_end_position(get_end_position());
        const interval_id = setInterval(() => {
            set_end_position(get_end_position());
        }, 120000);

        return () => clearInterval(interval_id);
    }, []);

    useEffect(() => {
        console.log(position);
    }, [position]);

    return (
        <div className="flex flex-col gap-4 p-4 h-full">
            <div className="w-full h-full rounded">
                <Map_box position={position} />
            </div>

            <button
                onClick={() => post_position()}
                className="p-4 rounded w-full bg-red-400 flex items-center justify-center"
            >
                {submit_content}
            </button>
        </div>
    );
}

export default Main_page;
