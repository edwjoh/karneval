import Layout from "./components/Layout";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function Main_page() {
    const [current_pos, set_current_pos] = useState({
        lat: null,
        lng: null,
    });

    useEffect(() => {
        const watch_id = navigator.geolocation.watchPosition(
            (pos) => {
                set_current_pos({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            (error) => {
                console.log(error);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 5000,
            },
        );

        return () => {
            navigator.geolocation.clearWatch(watch_id);
        };
    }, []);

    useEffect(() => {
        console.log(current_pos);
    }, [current_pos]);

    return (
        <Layout
            header={<Header />}
            main={
                <div className="flex flex-col gap-4 p-4 h-full">
                    <div className="grow p-2 bg-blue-400 w-full rounded">hej</div>

                    <button
                        onClick={() => console.log(current_pos)}
                        className="place-self-end p-4 rounded-full bg-blue-100"
                    >
                        Submit location
                    </button>
                </div>
            }
        />
    );
}

export default Main_page;
