import "leaflet/dist/leaflet.css";
import { MapContainer, CircleMarker, TileLayer, useMap, Marker } from "react-leaflet";
import { useEffect, useRef } from "react";
import Pin_icon from "../icons/Pin_icon";

export default function Map_box({ position }) {
	const marker_pos = [position.lat, position.long];

	const map_ref = useRef(null);

	function onclick() {
		map_ref.current.panTo(marker_pos);
	}

	return (
		<MapContainer
			ref={map_ref}
			center={[position.lat, position.long]}
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
			<Map_component position={position} />
			{/* <CircleMarker
				center={[position.lat, position.long]}
				radius={12}
				fillColor="#90D5FF"
				opacity={1}
				color="#1E90FF"
			/> */}

			<Marker
				position={[position.lat, position.long]}
				eventHandlers={{
					click: onclick,
				}}
			/>
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
