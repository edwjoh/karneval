import "leaflet/dist/leaflet.css";
import { MapContainer, CircleMarker, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";
import { asd } from "../misc/asd";
import Location_icon from "../icons/Location_icon";

const ICON_SIZE = 64;
const LUND_BOUNDS = [
	[55.65, 13.15],
	[55.75, 13.25],
];

export default function Map_box({ user_position, end_position, on_request_location }) {
	const map_ref = useRef(null);

	const custom_icon = L.icon({
		iconUrl: "/blue.png",
		iconSize: [ICON_SIZE, ICON_SIZE],
		iconAnchor: [ICON_SIZE / 2, ICON_SIZE],
		popupAnchor: [0, -ICON_SIZE],
	});

	function pan_to_position(position) {
		if (!map_ref.current || !position) return;
		map_ref.current.panTo([position.lat, position.long]);
	}

	function handle_location_click() {
		if (user_position) {
			pan_to_position(user_position);
		} else {
			on_request_location();
		}
	}

	useEffect(() => {
		pan_to_position(end_position);
	}, [end_position]);

	return (
		<div className="relative w-full h-full">
			<MapContainer
				ref={map_ref}
				center={[end_position.lat, end_position.long]}
				zoomControl={false}
				zoom={15}
				minZoom={11}
				attributionControl={false}
				maxBounds={LUND_BOUNDS}
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

				{user_position && (
					<CircleMarker
						center={[user_position.lat, user_position.long]}
						radius={14}
						fillColor="#315ff3"
						opacity={1}
						fillOpacity={1}
						color="#fff"
						weight={4}
					/>
				)}

				<Marker
					icon={custom_icon}
					position={[end_position.lat, end_position.long]}
					eventHandlers={{
						popupopen: () => {
							setTimeout(() => pan_to_position(end_position), 100);
						},
					}}
				>
					<Popup>Det här är slutet av kön!</Popup>
				</Marker>
			</MapContainer>

			<button
				onClick={handle_location_click}
				className="absolute top-4 right-4 z-1000 bg-white shadow-lg rounded-lg p-3"
			>
				<Location_icon size="28" />
			</button>
		</div>
	);
}
