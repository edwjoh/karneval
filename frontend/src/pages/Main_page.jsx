import { useEffect, useState } from "react";

import submit_end from "../api/submit_end";
import get_end from "../api/get_end";
import Map_box from "../components/Map_box";
import Loader from "../components/Loader";
import Check_icon from "../icons/Check_icon";
import X_icon from "../icons/X_icon";
import coords_distance from "../misc/distance";

function Main_page() {
    const default_text = "Är du i slutet av kön? Hjälp andra och dela din position";

    const [submit_content, set_submit_content] = useState(default_text);
    const [is_loading_end_position, set_is_loading_end_position] = useState(false);

    const [user_position, set_user_position] = useState({
        lat: 55.7029,
        long: 13.1947,
    });

    const [end_position, set_end_position] = useState({
        lat: 55.7029,
        long: 13.1947,
    });

    function is_in_range() {
        const MAX_DISTANCE = 250;

        const distance = coords_distance(user_position, end_position);
        console.log(distance);

        return distance < MAX_DISTANCE;
    }

    async function load_end_position() {
        const data = await get_end();

        if (!data) return;

        set_end_position(data);
        set_is_loading_end_position(false);
    }

    async function post_position() {
        set_submit_content(<Loader color="black" size="24px" />);

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
            <div className="w-full h-full rounded relative">
                {is_loading_end_position && <Loader_display />}

                <Map_box user_position={user_position} end_position={end_position} />
            </div>
            <button
                disabled={!is_in_range() || submit_content != default_text}
                onClick={() => post_position()}
                className="p-4 w-full bg-green-300 flex items-center justify-center disabled:opacity-30 shadow rounded-lg h-24"
            >
                {submit_content}
            </button>
        </div>
    );
}

export default Main_page;

function Loader_display() {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
            className="bg-black/50 w-full h-full flex justify-center items-center z-20 absolute top-0 left-0"
        >
            <Loader color="white" size="48px" />
        </div>
    );
}
