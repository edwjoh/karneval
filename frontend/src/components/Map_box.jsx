import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const position = [55.72248, 13.2128];

export default function Map_box() {
	return (
		<MapContainer
			center={position}
			zoom={15}
			scrollWheelZoom={false}
			style={{ height: "100%", width: "100%", zIndex: 2 }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	);
}
