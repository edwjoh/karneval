import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import { useEffect } from "react";

// const position = [55.72248, 13.2128];

export default function Map_box({ position }) {
    return (
        <MapContainer
            center={[position.lat, position.long]}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", zIndex: 2, borderRadius: "6px" }}
        >
            <TileLayer
                url={`https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${"y79r0d3305U62Jkfz2tGHQq2Qmuea0rxf2YIBeeJbTjqvQ2yuyxHZJi0fMANL8MZ"}`}
                attribution='&copy; <a href="http://jawg.io">Jawg</a>'
            />
            <Map_component position={position} />
        </MapContainer>
    );
}

function Map_component({ position }) {
    const map = useMap();

    useEffect(() => {
        map.setView([position.lat, position.long], map.getZoom());
    }, [position]);

    return null;
}
