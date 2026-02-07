import "leaflet/dist/leaflet.css";
import { MapContainer, CircleMarker, TileLayer, Marker, Circle, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";
import { asd } from "../misc/asd";

export default function Map_box({ user_position, end_position }) {
	const map_ref = useRef(null);

	function pan_to_end() {
		if (!map_ref.current) return;
		map_ref.current.panTo([end_position.lat, end_position.long]);
	}

	useEffect(() => {
		pan_to_end();
	}, [end_position]);

	const size = 64;

	const customIcon = L.icon({
		iconUrl: "/blue.png",
		iconSize: [size, size],
		iconAnchor: [size / 2, size],
		popupAnchor: [0, -size],
	});

	const lund_bounds = [
		[55.65, 13.15],
		[55.75, 13.25],
	];

	return (
		<MapContainer
			ref={map_ref}
			center={[end_position.lat, end_position.long]}
			zoomControl={false}
			zoom={15}
			minZoom={11}
			attributionControl={false}
			maxBounds={lund_bounds}
			maxBoundsViscosity={1.0}
			style={{
				height: "100%",
				width: "100%",
				zIndex: 2,
				borderRadius: "6px",
				backgroundColor: "#f2ede7",
			}}
		>
			<TileLayer
				url={`https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${asd}`}
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
					popupopen: () => {
						setTimeout(() => {
							pan_to_end();
						}, 100);
					},
				}}
			>
				<Popup>Det här är slutet av kön!</Popup>
			</Marker>
		</MapContainer>
	);
}
