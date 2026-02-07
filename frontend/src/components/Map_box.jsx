import "leaflet/dist/leaflet.css";
import { MapContainer, CircleMarker, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";

export default function Map_box({ user_position, end_position }) {
	const marker_pos = [user_position.lat, user_position.long];

	const map_ref = useRef(null);

	function onclick() {
		map_ref.current.panTo(marker_pos);
	}

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
			center={[user_position.lat, user_position.long]}
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
			<Map_component user_position={user_position} />
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
					click: onclick,
				}}
			/>
		</MapContainer>
	);
}

function Map_component({ user_position }) {
	const map = useMap();

	useEffect(() => {
		map.setView([user_position.lat, user_position.long], map.getZoom());
	}, [user_position]);

	return null;
}
