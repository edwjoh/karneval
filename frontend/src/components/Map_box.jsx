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
            style={{ height: "100%", width: "100%", zIndex: 2 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
