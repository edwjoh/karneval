import Layout from "./components/Layout";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function Main_page() {
    const [current_pos, set_current_pos] = useState({
        lat: null,
        long: null,
    });

    useEffect(() => {
        setInterval(() => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    set_current_pos({ lat: pos.coords.latitude, long: pos.coords.longitude });
                },
                (error) => {
                    console.log(error);
                },
            );
        }, 10000);
    }, []);

    useEffect(() => {
        console.log(current_pos);
    }, [current_pos]);

    return (
        <Layout
            header={<Header />}
            main={
                <div className="flex flex-col gap-4 p-4 h-full">
                    <div className="grow p-2 bg-blue-400 w-full rounded">
                        <></>
                    </div>

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
