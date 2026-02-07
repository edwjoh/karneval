import "leaflet/dist/leaflet.css";
import { MapContainer, CircleMarker, TileLayer, Marker } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";

export default function Map_box({ user_position, end_position }) {
    const map_ref = useRef(null);

    function pan_to_end() {
        if (!map_ref.current) return;
        map_ref.current.panTo([end_position.lat, end_position.long]);
    }

    useEffect(() => {
        pan_to_end();
    }, [end_position]);

    const size = 48;

    const customIcon = L.icon({
        iconUrl: "/outline.png",
        iconSize: [size, size],
        iconAnchor: [size / 2, size],
        popupAnchor: [0, -size],
    });

    return (
        <MapContainer
            ref={map_ref}
            center={[end_position.lat, end_position.long]}
            zoomControl={false}
            zoom={15}
            scrollWheelZoom={false}
            attributionControl={false}
            style={{
                height: "100%",
                width: "100%",
                zIndex: 2,
                borderRadius: "6px",
                backgroundColor: "#1b1b1b",
            }}
        >
            <TileLayer
                url={`https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${"y79r0d3305U62Jkfz2tGHQq2Qmuea0rxf2YIBeeJbTjqvQ2yuyxHZJi0fMANL8MZ"}`}
                attribution='&copy; <a href="http://jawg.io">Jawg</a>'
            />
            <CircleMarker
                center={[user_position.lat, user_position.long]}
                radius={14}
                fillColor="#315ff3"
                opacity={1}
                fillOpacity={1}
                color="#fff"
                weight={4}
            />
            <Marker
                icon={customIcon}
                position={[end_position.lat, end_position.long]}
                eventHandlers={{
                    click: pan_to_end,
                }}
            />
        </MapContainer>
    );
}
